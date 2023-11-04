const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const routerPost = express.Router();

routerPost.post('/', middlewares.checkToken, controllers.createPost);

module.exports = routerPost;