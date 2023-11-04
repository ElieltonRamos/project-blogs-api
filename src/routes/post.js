const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const routerPost = express.Router();

routerPost.post('/', middlewares.checkToken, controllers.createPost);

routerPost.get('/', middlewares.checkToken, controllers.getAllPosts);

module.exports = routerPost;