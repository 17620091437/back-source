const Article=require('../model/article.js');
const User=require('../model/user.js');

exports.loginCheck = loginCheck;
exports.getPageArticles = getPageArticles;
exports.getArticle = getArticle; 
exports.getAllArticles = getAllArticles;
exports.issue_article = issue_article;
exports.delete_article = delete_article;
exports.getTags = getTags;
exports.addComment = addComment;
exports.getTagArticles = getTagArticles;
exports.getAdminPageArticles = getAdminPageArticles;


function loginCheck(req,res) {
    let username=req.body.account;
    let password=req.body.password;
    User.findOne({username},(err,data)=>{
        if(err){
            console.log(err);
            res.send({status:0,msg:err})
        }else{
            if(data){
                if (username === data.username && password === data.password){
                    res.send({ status: 3, msg: '登录成功！' });
                }else{
                    res.send({ status: 2, msg: '密码错误！' });
                }
            }else{
                res.send({ status: 1, msg: '帐号不存在！' });
            }
        }
    })
}

async function getPageArticles(req,res){
    let page=parseInt(req.query.page);
    let limit=parseInt(req.query.limit);
    let skip=(page-1)*limit;
    await Promise.all([
        getArticlesCount(),
        getArticles(limit, skip),
    ]).then(([count, articles])=>{
        res.send({
            status: 1,
            count,
            data: articles,
        })
    },(err)=>{
        console.log(err);
        res.send({
            status: 0,
        })
    })

    function getArticlesCount() {
        return new Promise((resolve,reject)=>{
            Article.count({},(err,count)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(count);
                }
            })
        })
    }

    function getArticles(limit, skip){
        return new Promise((resolve,reject)=>{
            Article.find({}, '-content -comment', { limit, skip, sort: '-date' }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }
}

function getArticle(req,res) {
    let id = req.query.id;
    Article.findOne({ id }, (err, data) => {
        if (err) {
            res.send({
                status:0,
                msg:err
            });
        }else{
            res.send({
                status:1,
                data:data,
            })
        }
    })    
}

function getAllArticles(req,res) {
    Article.find({}, 'id date title', { sort: '-date' },(err,data)=>{
        if(err){
            res.send({status:0,msg:err});
        }else{
            res.send({status:1,data});
        }
    })
}

function issue_article(req, res) {
    let id = req.body.id;
    let title = req.body.title;
    let tags = req.body.tags;
    let summary = req.body.summary;
    let content = req.body.content;
    let dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = (dateObj.getMonth() + 1) < 10 ? '0' + (dateObj.getMonth() + 1) : (dateObj.getMonth() + 1);
    let day = dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate();
    let date = req.body.date ? req.body.date : (year + '-' + month + '-' + day);
    if(!id){
        id = new Date().getTime();
        let comment = [];
        Article.create({
            id:id,
            title:title,
            tags: tags,
            date:date,
            summary:summary,
            content: content,
            comment: comment,
        },(err)=>{
            if(err) res.send({status:0,msg:err});
            else res.send({status:1});
        })
    }else{
        Article.update({id:id},{
            title: title,
            tags: tags,
            date: date,
            summary: summary,
            content: content,
        },err=>{
            if (err) res.send({ status: 0, msg: err });
            else res.send({status:1});
        })
    }
}

function delete_article(req, res) {
    let id = req.params.id;
    Article.remove({ id: id }, (err, data) => {
        if (err) {
            res.send({status:0,msg:err});
            return;
        }
        res.send({status:1});
    })
}

function getTags(req, res) {
    Article.find({},'tags' ,(err, data) => {
        if (err) {
            res.send({ status: 0, msg: err });
        }else{
            let temp = {};
            let tags = [];
            data.map(articleTags=>{
                articleTags.tags.map(articleTag=>{
                    if (!temp[articleTag]){
                        temp[articleTag] = articleTag;
                        tags.push({
                            tag:articleTag,
                            count:1,
                        })
                    }else{
                        tags.map(tagItem=>{
                            if (tagItem.tag === articleTag){
                                tagItem.count++;
                            }
                        });
                    }
                });
            });
            res.send({ status: 1, data:tags })
        }
    });
}

function addComment(req,res) {
    let articleId=req.body.articleID;
    let comment = req.body.commentObj;

    let dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = (dateObj.getMonth() + 1) < 10 ? '0' + (dateObj.getMonth() + 1) : (dateObj.getMonth() + 1);
    let day = dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate();
    comment.date = year + '-' + month + '-' + day;

    Article.update({ id: articleId},{$push:{comment}},(err,data)=>{
        if(err){
            console.log(err);
            res.send({status:0,msg:err});
        }else{
            delete comment.email;
            res.send({status:1,data:comment})
        }
    })
}

function getTagArticles(req,res) {
    let tag = decodeURI(req.params.tag);
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let skip = (page - 1) * limit;
    Article.find({tags:tag}, '-content -comment', { limit, skip, sort: '-date' }, (err, data) => {
        if (err) {
            res.send({
                status: 0,
                msg:err,
            })
        } else {
            res.send({
                status: 1,
                data: data,
            })
        }
    });
}

async function getAdminPageArticles(req,res){
    let condition = {};
    if(req.query.title){
        condition.title = { $regex: req.query.title, $options: "$i"};
    }
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let sort = req.query.sort=='desc'?'date':'-date';
    let skip = (page - 1) * limit;
    await Promise.all([
        getArticlesCount(condition),
        getArticles(condition, limit, skip),
    ]).then(([count, articles]) => {
        res.send({
            status: 1,
            count,
            data: articles,
        })
    }, (err) => {
        console.log(err);
        res.send({
            status: 0,
        })
    })

    function getArticlesCount(condition) {
        return new Promise((resolve, reject) => {
            Article.count(condition, (err, count) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(count);
                }
            })
        })
    }

    function getArticles(condition, limit, skip) {
        return new Promise((resolve, reject) => {
            Article.find(condition, '-content -summary', { limit, skip, sort }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }
}