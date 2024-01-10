require('dotenv').config();

const { PORT } = require('./config');

const express = require('express');
const app = express();
const cors = require('cors');
const listEndpoints = require('express-list-endpoints');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const promBundle = require('express-prom-bundle');

const { Registry } = require('prom-client'); // Import Prometheus registry
const register = new Registry();
const metricsMiddleware = promBundle({ register }); // Middleware to expose Prometheus metrics

app.use(metricsMiddleware);

const routes = require('./routes');
const { sequelize } = require('./db');
const { logger } = require('./config/logger');

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'H3 Microservice',
			version: '1.0.0',
		},
	},
	apis: ['./index.js', './routes/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/', routes);

/**
 * @openapi
 * tags:
 *   - name: Swagger
 *     description: API Swagger Documentation
 *
 * /api-docs:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     tags:
 *       - Swagger
 *     responses:
 *       200:
 *         description: Return swagger documentation
 */

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(openapiSpecification));

try {
	sequelize.authenticate();
	logger.info('Connection has been established successfully.');
} catch (error) {
	logger.error('Unable to connect to the database:', error);
}

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server listening on http://localhost:${PORT} 🎉`);
	// console.log(listEndpoints(app));
}).on('error', (err) => {
	logger.error('Server Error', err);
	console.log('Server Error', err);
	sequelize.close();
	console.log('Database connection closed');
	logger.error('Database connection closed');
});
