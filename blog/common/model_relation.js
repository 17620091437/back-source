Article.hasMany(Comment);
Article.hasMany(Tag);
Article.belongsTo(User);
Comment.belongsTo(User);
Comment.belongsTo(Article);
Tag.belongsTo(Article);