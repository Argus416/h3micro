const { Sequelize } = require('sequelize');
const { POSTGRES_URI } = require('../config');

const sequelize = new Sequelize(POSTGRES_URI);
exports.User = require('../models/user')(sequelize, Sequelize.DataTypes);
exports.Post = require('../models/post')(sequelize, Sequelize.DataTypes);

(async () => {
	await sequelize.sync({
		force: false,
		logging: false,
	});
	console.log('Database tables created');
})();

exports.sequelize = sequelize;
