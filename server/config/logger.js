var winston = require('winston');

exports.logger = winston.createLogger({
	level: winston.config.npm.levels,
	format: winston.format.combine(
		winston.format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss.SSSZ',
		}),
		winston.format.json()
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.Console({ format: winston.format.simple() }),
	],
});
