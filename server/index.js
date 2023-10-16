require('dotenv').config();

const { PORT, POSTGRES_URI } = require('./config');

const express = require('express');
const app = express();
const cors = require('cors');
const listEndpoints = require('express-list-endpoints'); // npm i express-list-endpoints
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const routes = require('./routes');

const { sequelize } = require('./db');
const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'H3 Microservice',
			version: '1.0.0',
		},
	},
	apis: ['./index.js', './routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/', routes);

/**
 * @openapi
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
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server listening on http://localhost:${PORT}`);
	// console.log(listEndpoints(app));
}).on('error', (err) => {
	console.log('Server Error', err);
	sequelize.close();
	console.log('Database connection closed');
});
