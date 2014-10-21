define([
	"jquery",
	"backbone",
	"util"
], function($, Backbone, Util) {
	var AppView = Backbone.View.extend({

		el: $("body"),

		events: {
			"submit form.proceed": "proceedForm",
			"click input.submit": "proceedForm",
			"click a.proceed": "proceedLink",
		},

		initialize: function() {},

		render: function() {
			if (typeof App !== "undefined" && App.initialPageName) {
				this.showPage({
					viewName: App.initialPageName,
					base: "base"
				});				
			}
		},

		proceedForm: function(e) {
			var that = this;

			document.getElementById("content").innerHTML = "<h2>Loading...</h2>";
			
			$.post(e.target.action, $(e.target).serialize(), function(json) {
				that.showPage(json, Backbone);
			});

			e.preventDefault();
		},

		proceedLink: function(e) {
			this.getPage(e.target.href, Backbone);
			e.preventDefault();
		},


		showPage: function(json, backbone) {
			var that = this;

			require(["views/" + json.viewName], function (View) {

				Util.dustRender(json.viewName, json, $("#content"));

				var pageView = new View();

				if (pageView.render) {
					pageView.render();
				}
			});
		},

		getPage: function(url, backbone) {
			var that = this;

			document.getElementById("content").innerHTML = "<h2>Loading...<h2>";

			$.get(url, function(json) {
				that.showPage(json, backbone);
			});
		}

	});

	return AppView;

});