Topic.hasMany(Post);
User.hasMany(Post);
Post.belongsTo(User);
Post.belongsTo(Topic);
User.hasMany(Comment);
Comment.belongsTo(User);

User.belongsToMany(User, { as: 'follow-list', through: FollowRelation, foreignKey: 'fans_user_id', otherKey: 'follow_user_id' });
User.belongsToMany(User, { as: 'fans-list', through: FollowRelation, foreignKey: 'follow_user_id', otherKey: 'fans_user_id' });
