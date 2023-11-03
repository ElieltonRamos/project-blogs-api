const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const routerCategories = express.Router();

routerCategories.post('/', middlewares.checkToken, controllers.createCategory);

module.exports = routerCategories;