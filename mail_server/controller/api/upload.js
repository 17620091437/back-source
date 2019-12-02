const multer = require('koa-multer')
const fs = require("fs")
const moment = require('moment');
const path = require("path")


module.exports = {
    upload: async (ctx,next) => {
        let upload = createUpload();
        await upload.single('file')(ctx,next)
        ctx.body = {
            code:200,
            message:"success",
            path: ctx.req.file.filename//返回文件名
        }
    }
}

function createUpload(){
    let date = moment().format("YYYY-MM-DD");
    let dirPath = path.join(GB_CONFIG.UPLOAD_PATH,date);
    mkdirsSync(dirPath)
    let upload = multer({ 
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, dirPath)
            },
            filename: function (req, file, cb) {
                let fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
                cb(null,`f_${Date.now()}.${fileFormat[fileFormat.length - 1]}`);
            }
            })
        });
    return upload;
}

//递归创建目录 同步方法  
function mkdirsSync(dirname) {   
    if (fs.existsSync(dirname)) {  
        return true;  
    } else {  
        if (mkdirsSync(path.dirname(dirname))) {  
            fs.mkdirSync(dirname);  
            return true;  
        }  
    }  
}