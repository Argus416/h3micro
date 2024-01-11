const express = require('express');
const router = express.Router();
const { client } = require('../db/elastic');
const { logger } = require('../config/logger');

/**
 * @openapi
 * /autocomplete/users/{query}:
 *   get:
 *     summary: Get autocomplete suggestions for user names
 *     tags:
 *       - Autocomplete
 *     parameters:
 *       - in: path
 *         name: query
 *         required: true
 *         description: The prefix to use for autocomplete suggestions
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with autocomplete suggestions
 *         content:
 *           application/json:
 *             example:
 *               suggestions:
 *                 - John Doe
 *                 - John Smith
 *                 - ...
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Autocompletion error
 */

router.get('/users/:query', async (req, res) => {
	const { query } = req.params;

	try {
		const data = await client.search({
			index: 'users', // Replace 'users' with your Elasticsearch index
			body: {
				suggest: {
					userSuggest: {
						prefix: query,
						completion: {
							field: 'name.completion',
							size: 5, // Number of suggestions to return
						},
					},
				},
			},
		});

		// const suggestions = data.suggest.userSuggest[0]?.options.map(
		// 	(option) => option._source.name
		// );
		const suggestions =
			data?.suggest?.userSuggest[0]?.options.map((option) => {
				return {
					name: option._source.name,
					email: option._source.email,
					_id: option._id,
				};
			}) || [];

		res.json(suggestions);
	} catch (e) {
		logger.error('Autocompletion error', e);
		res.send(`Autocompletion error: ${e}`);
	}
});

module.exports = router;
