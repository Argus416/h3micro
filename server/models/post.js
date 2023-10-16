module.exports = (sequelize, DataTypes) => {
	const Post = sequelize.define('Post', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	});

	Post.associate = (models) => {
		Post.belongsTo(models.User, { foreignKey: 'userId' }); // Associate Post with User
	};

	console.log(Post.associations);

	return Post;
};
