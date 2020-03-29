'use strict';

const todoController = require('../controllers/todo-controller');
/**
 * Preparing the routes
 */
module.exports = (app) => {
    app.route('/todo')
        .get(todoController.list)
        .post(todoController.save);

    app.route('/todo/:id')
        .get(todoController.get)
        .put(todoController.update)
        .delete(todoController.delete);
};