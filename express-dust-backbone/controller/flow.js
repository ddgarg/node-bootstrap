var util = require("../lib/util.js");

module.exports = function(app) {
              
	app.get("/", function(req, res) {

		var json = {
			baseTemplate: "base",
			viewName: "landing"
		};

		util.respond(req, res, json);
	});
       
	app.get("/about", function(req, res) {

		var json = {
			viewName: "about",
			baseTemplate: "base"
		};

		util.respond(req, res, json);
	});

	app.get("/landing", function(req, res) {

		var json = {
			viewName: "landing",
			baseTemplate: "base"
		};

		util.respond(req, res, json);
	});
}
