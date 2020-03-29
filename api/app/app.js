'use strict';
/**
 * importing models and routes from respective index.js
 */
module.exports = (app) => {
    const models = require('./models/index');
    const routes = require('./routes/index');
    routes(app);
};