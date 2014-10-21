define([
	"backbone"
], function(Backbone) {

	var AboutModel = Backbone.Model.extend({
		url: "/api/about"
	});

	return AboutModel;
});
