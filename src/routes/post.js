const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const routerPost = express.Router();

routerPost.get('/search', middlewares.checkToken, controllers.searchPost);

routerPost.post('/', middlewares.checkToken, controllers.createPost);

routerPost.get('/', middlewares.checkToken, controllers.getAllPosts);

routerPost.get('/:id', middlewares.checkToken, controllers.getPostById);

routerPost.put('/:id', middlewares.checkToken, controllers.updatePost);

routerPost.delete('/:id', middlewares.checkToken, controllers.deletePost);

module.exports = routerPost;