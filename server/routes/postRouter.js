const express = require('express');
const router = express.Router();
const { Post } = require('../db');

router.get('/', async (req, res) => {
	const posts = await Post.findAll({
		include: [{ model: db.User, as: 'user' }],
	});
	res.json(posts);
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const post = await Post.findByPk(id, {
			include: [{ model: db.User, as: 'user' }],
		});
		res.json(post);
	} catch (e) {
		res.send(`Unable to find post: ${e}`);
	}
});

router.post('/', async (req, res) => {
	try {
		const { title, content } = req.body;
		const post = await Post.create({
			title,
			content,
		});
		res.json({ post: post });
	} catch (e) {
		res.send(`Unable to create post:  ${e}`);
	}
});

router.patch('/:id', async (req, res) => {
	try {
		console.log(req.body);
		const { id } = req.params;
		const post = await Post.update(
			{
				...req.body,
				userId: parseInt(req.body.userId),
			},
			{
				where: {
					id,
				},
			}
		);
		if (!post) throw new Error('Post not found');

		res.json({ message: 'Post was updated succeffully' });
	} catch (e) {
		res.send(`Unable to update post:  ${e}`);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const post = await Post.destroy({
			where: {
				id,
			},
		});

		if (!post) throw new Error('Post not found');

		res.json({ message: 'Post was deleted succeffully' });
	} catch (e) {
		res.send(`Unable to delete post:  ${e}`);
	}
});

module.exports = router;
