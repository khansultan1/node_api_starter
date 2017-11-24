(function () {

	module.exports = function(app) {
	 var test = require("../controller/testController.js");

	app.get('/testApi', test.testFunction);
}

})();