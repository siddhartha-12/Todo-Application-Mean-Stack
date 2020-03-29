'use strict';
/**
 * Importing the routes
 */
const todoRoute = require('./../routes/todo-route');

module.exports = (app) => {
    todoRoute(app);
};