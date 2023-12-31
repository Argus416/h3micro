const express = require('express');
const router = express.Router();
const { User } = require('../db');

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
		const users = await User.findAll();
		res.json(users);
	})
	.post(async (req, res) => {
		try {
			const { name, email } = req.body;
			console.log({ name, email });
			const user = await User.create({
				name,
				email,
			});
			res.json({ user });
		} catch (e) {
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
 *           type: integer
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
 *           type: integer
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
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response after deleting the user
 */

router
	.route('/:id')
	.get(async (req, res) => {
		try {
			const { id } = req.params;
			const user = await User.findByPk(id);
			res.json(user);
		} catch (e) {
			res.send(`Unable to find user: ${e}`);
		}
	})
	.patch(async (req, res) => {
		try {
			console.log(req.body);
			const { id } = req.params;
			const user = await User.update(
				{
					...req.body,
				},
				{
					where: {
						id,
					},
				}
			);
			if (!user) throw new Error('User not found');

			res.json({ message: 'User was updated successfully' });
		} catch (e) {
			res.send(`Unable to update user: ${e}`);
		}
	})
	.delete(async (req, res) => {
		try {
			const { id } = req.params;

			const user = await User.destroy({
				where: {
					id,
				},
			});

			if (!user) throw new Error('User not found');

			res.json({ message: 'User was deleted successfully' });
		} catch (e) {
			res.send(`Unable to delete user: ${e}`);
		}
	});

module.exports = router;
