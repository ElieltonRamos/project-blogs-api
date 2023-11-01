const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const routerLogin = express.Router();

routerLogin.post('/', middlewares.checkLoginFields, controllers.login);

module.exports = routerLogin;