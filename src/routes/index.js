const express = require('express');
const routerLogin = require('./login');
const routerUser = require('./user');
const routerCategories = require('./categories');
const routerPost = require('./post');

const router = express.Router();

router.use('/login', routerLogin);

router.use('/user', routerUser);

router.use('/categories', routerCategories);

router.use('/post', routerPost);

module.exports = router;
