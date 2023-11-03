const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const routerUser = express.Router();

routerUser.post('/', controllers.createUser);

routerUser.get('/', middlewares.checkToken, controllers.getAllUsers);

module.exports = routerUser;