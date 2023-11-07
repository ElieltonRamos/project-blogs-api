const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const routerUser = express.Router();

routerUser.post('/', controllers.createUser);

routerUser.get('/', middlewares.checkToken, controllers.getAllUsers);

routerUser.get('/:id', middlewares.checkToken, controllers.getUserId);

routerUser.delete('/me', middlewares.checkToken, controllers.deleteUser);

module.exports = routerUser;