const express = require('express');
const router = express.Router();
const { User } = require('../db');

router.get('/', async (req, res) => {
	const users = await User.findAll();
	res.json(users);
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
		res.json(user);
	} catch (e) {
		res.send(`Unable to find user: ${e}`);
	}
});

router.post('/', async (req, res) => {
	try {
		const { name, email } = req.body;
		console.log({ name, email });
		const user = await User.create({
			name,
			email,
		});
		res.json({ user: user });
	} catch (e) {
		res.send(`Unable to create user:  ${e}`);
	}
});

router.patch('/:id', async (req, res) => {
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

		res.json({ message: 'User was updated succeffully' });
	} catch (e) {
		res.send(`Unable to update user:  ${e}`);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.destroy({
			where: {
				id,
			},
		});

		if (!user) throw new Error('User not found');

		res.json({ message: 'User was deleted succeffully' });
	} catch (e) {
		res.send(`Unable to delete user:  ${e}`);
	}
});

module.exports = router;
