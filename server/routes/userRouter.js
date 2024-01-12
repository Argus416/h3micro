const express = require('express');
const router = express.Router();
const { client } = require('../db/elastic');
const { logger } = require('../config/logger');

/**
 * @openapi
 * tags:
 *   name: Users
 *   description: Operations related to users
 *
 * /users:
 *   get:
 *     summary: Retrieve all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Successful response with a list of users
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       description: User data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user
 *               email:
 *                 type: string
 *                 description: The email of the user
 *     responses:
 *       200:
 *         description: Successful response with the created user
 */

router
	.route('/')
	.get(async (req, res) => {
		try {
			const data = await client.search({
				index: 'users',
				body: {
					query: {
						match_all: {},
					},
				},
			});

			const users = data.hits.hits.map((hit) => {
				return { ...hit._source, _id: hit._id };
			});

			res.json(users);
		} catch (e) {
			logger.error('Unable to retrieve users', e);
			res.send(`Unable to retrieve users: ${e}`);
		}
	})
	.post(async (req, res) => {
		try {
			const { name, email } = req.body;

			if (!name || !email) throw new Error('Name and email are required');
			// Create an index with a mapping that includes a 'completion' field
			// await client.indices.create({
			// 	index: 'users', // Replace 'users' with your Elasticsearch index
			// 	body: {
			// 		mappings: {
			// 			properties: {
			// 				name: {
			// 					type: 'text',
			// 					fields: {
			// 						completion: {
			// 							type: 'completion',
			// 						},
			// 					},
			// 				},
			// 				email: {
			// 					type: 'text',
			// 				},
			// 			},
			// 		},
			// 	},
			// });

			const user = await client.index({
				index: 'users',
				body: {
					name,
					email,
				},
			});

			res.json({ user });
		} catch (e) {
			logger.error('Unable to create user', e);
			res.send(`Unable to create user: ${e}`);
		}
	});

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Retrieve a specific user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with the requested user
 *   patch:
 *     summary: Update a specific user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: string
 *     requestBody:
 *       description: User data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the user
 *               email:
 *                 type: string
 *                 description: The updated email of the user
 *     responses:
 *       200:
 *         description: Successful response after updating the user
 *   delete:
 *     summary: Delete a specific user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response after deleting the user
 */

router
	.route('/:id')
	.get(async (req, res) => {
		try {
			const { id } = req.params;
			const user = await client.get({
				index: 'users',
				id,
			});

			res.json(user);
		} catch (e) {
			res.send(`Unable to find user: ${e}`);
		}
	})
	.patch(async (req, res) => {
		try {
			const { id } = req.params;
			const user = await client.update({
				index: 'users',
				id,
				body: {
					doc: req.body,
				},
			});

			res.json({ user, message: 'User was updated successfully' });
		} catch (e) {
			res.send(`Unable to update user: ${e}`);
		}
	})
	.delete(async (req, res) => {
		try {
			const { id } = req.params;
			const user = await client.delete({
				index: 'users',
				id,
			});

			// if (body.result !== 'deleted') throw new Error('User not found');

			res.json({ user, message: 'User was deleted successfully' });
		} catch (e) {
			res.send(`Unable to delete user: ${e}`);
		}
	});

module.exports = router;
