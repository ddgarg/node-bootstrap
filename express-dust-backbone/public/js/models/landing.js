define([
	"backbone"
], function(Backbone) {

	var LandingModel = Backbone.Model.extend({
		url: "/api/landing"
	});

	return LandingModel;
});
