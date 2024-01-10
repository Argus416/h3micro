const express = require('express');
const router = express.Router();
const { Post } = require('../db');

/**
 * @openapi
 * tags:
 *   name: Posts
 *   description: Operations related to posts
 *
 * /posts:
 *   get:
 *     summary: Retrieve all posts
 *     tags:
 *       - Posts
 *     responses:
 *       200:
 *         description: Successful response with a list of posts
 *
 *   post:
 *     summary: Create a new post
 *     tags:
 *       - Posts
 *     requestBody:
 *       description: Post data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the post
 *               content:
 *                 type: string
 *                 description: The content of the post
 *     responses:
 *       200:
 *         description: Successful response with the created post
 */

router
	.route('/')
	.get(async (req, res) => {
		const posts = await Post.findAll({
			// include: [{ model: db.User, as: 'user' }],
		});
		res.json(posts);
	})
	.post(async (req, res) => {
		try {
			const { title, content } = req.body;
			const post = await Post.create({
				title,
				content,
			});
			res.json({ post });
		} catch (e) {
			res.send(`Unable to create post: ${e}`);
		}
	});

/**
 * @openapi
 * /posts/{id}:
 *   get:
 *     summary: Retrieve a specific post by ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the post
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response with the requested post
 *   patch:
 *     summary: Update a specific post by ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the post
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Post data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The updated title of the post
 *               content:
 *                 type: string
 *                 description: The updated content of the post
 *               userId:
 *                 type: integer
 *                 description: The updated user ID associated with the post
 *     responses:
 *       200:
 *         description: Successful response after updating the post
 *   delete:
 *     summary: Delete a specific post by ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the post to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response after deleting the post
 */
router
	.route('/:id')
	.get(async (req, res) => {
		try {
			const { id } = req.params;
			const post = await Post.findByPk(id, {
				include: [{ model: db.User, as: 'user' }],
			});
			res.json(post);
		} catch (e) {
			res.send(`Unable to find post: ${e}`);
		}
	})
	.patch(async (req, res) => {
		try {
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

			res.json({ message: 'Post was updated successfully' });
		} catch (e) {
			res.send(`Unable to update post: ${e}`);
		}
	})
	.delete(async (req, res) => {
		try {
			const { id } = req.params;

			const post = await Post.destroy({
				where: {
					id,
				},
			});

			if (!post) throw new Error('Post not found');

			res.json({ message: 'Post was deleted successfully' });
		} catch (e) {
			res.send(`Unable to delete post: ${e}`);
		}
	});

module.exports = router;
