let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), //loading mongose model
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/angular', {});
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.append('Access-Control-Allow-Methods', 'DELETE')
    res.append('Access-Control-Allow-Methods', 'PUT')
    next();
});

const initApp = require('./app/app');
initApp(app);
//initiating the listen on the port where the services start
app.listen(port);
console.log('Order RESTful API server started on: ' + port);