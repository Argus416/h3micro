require('dotenv').config();

const { PORT, POSTGRES_URI } = require('./config');

const express = require('express');
const app = express();
const cors = require('cors');
const listEndpoints = require('express-list-endpoints'); // npm i express-list-endpoints

const routes = require('./routes');

const { sequelize } = require('./db');

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/', routes);
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
