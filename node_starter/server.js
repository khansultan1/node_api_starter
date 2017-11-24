var express = require('express');
var app = express();
var server = app.listen(8443, "0.0.0.0", function () {
    var host = server.address().address
    var port = server.address().port
});
var log4js = require('log4js');
log4js.configure({
appenders: {
out:{ type: 'console' },
app:{ type: 'file', filename: 'logs/err.log' }
},
categories: {
default: { appenders: [ 'out', 'app' ], level: 'debug' }
}
});
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ 
    extended: false,
    parameterLimit: 1000000, // experiment with this parameter and tweak
    limit:'5mb'
}));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb'}));
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const path = require('path');
app.use(function (req, res, next) { 
    console.log('request came in');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true})); //application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(require('skipper')());
console.log("connected");
require("./routes/route.js")(app);

