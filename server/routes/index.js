const express = require('express');
const router = express.Router();
const { Post } = require('../db');
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');

router.use('/posts', postRouter);
router.use('/users', userRouter);
module.exports = router;
