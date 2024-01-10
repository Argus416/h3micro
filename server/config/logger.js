const winston = require('winston');
const { ElasticsearchTransport } = require('winston-elasticsearch');

const esTransport = new ElasticsearchTransport({
	level: 'info',
	indexPrefix: 'node_api',
	clientOpts: {
		node: 'http://localhost:9200',
	},
});
const logger = winston.createLogger({
	transports: [esTransport, new winston.transports.Console()],
});

exports.logger = logger;
