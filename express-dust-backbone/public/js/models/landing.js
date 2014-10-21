define([
	"backbone"
], function(Backbone) {

	var LandingModel = Backbone.Model.extend({
		url: "/api/landing",

		setModel: function (property, value) {
			this.attributes[property] = value;
			this.trigger("change");
		}
	});

	return LandingModel;
});
