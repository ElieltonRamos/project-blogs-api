const express = require('express');
const controllers = require('../controllers');

const routerUser = express.Router();

routerUser.post('/', controllers.createUser);

module.exports = routerUser;