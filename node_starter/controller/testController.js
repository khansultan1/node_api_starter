var request = require('request');
var path = require('path');
var fs = require('fs');
var md5 = require('md5');
var bcrypt = require('bcrypt-nodejs');
var log4js = require('log4js');
var ionicPushServer = require('ionic-push-server');

/* 
Your private functions here
*/

var testController = {
     testFunction: function(req, res){
				res.send({
                    code: 1,
                    message:"I am test"
                })
    }
};
    module.exports = testController;
