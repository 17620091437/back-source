Topic.hasMany(Post);
User.hasMany(Post);
Post.belongsTo(User);
Post.belongsTo(Topic);