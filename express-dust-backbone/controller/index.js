var util = require('../lib/util.js');

module.exports = function(app) {
              
	app.get('/', function(req, res) {

		var json = {
			viewName: "landing",
			baseTemplate: 'base',
			data: {			
			}
		};

		util.respond(req, res, json);
	});
       
	app.get('/about', function(req, res) {

		var json = {
			viewName: "about",
			baseTemplate: 'base',
			data: {			
			}
		};

		util.respond(req, res, json);
	});
}
