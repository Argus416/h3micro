var winston = require('winston');
const ecsFormat = require('@elastic/ecs-winston-format');
const WinstonLogStash = require('winston3-logstash-transport');

// exports.logger = winston.createLogger({
// 	level: winston.config.npm.levels,
// 	format: winston.format.combine(
// 		winston.format.timestamp({
// 			format: 'YYYY-MM-DD HH:mm:ss.SSSZ',
// 		}),
// 		winston.format.json()
// 	),
// 	transports: [
// 		new winston.transports.Console(),
// 		new winston.transports.Console({ format: winston.format.simple() }),
// 	],
// });

const logger = winston.createLogger({
	level: 'debug',
	format: ecsFormat({ convertReqRes: true }),
	transports: [
		new winston.transports.Console(), // Add console transport for local development if needed
		// new winston.transports.File({
		// 	filename: 'logs/log.json',
		// 	level: 'debug',
		// }),
	],
});

logger.add(
	new WinstonLogStash({
		mode: 'tcp',
		host: 'h3micro_logstash',
		port: 28777,
		trailingLineFeed: true,
	})
);

exports.logger = logger;
