define([
	"jquery", 
	"backbone",
	"util",
	"../models/landing",
	], 
	function($, Backbone, Util, Model){
	
		var View = Backbone.View.extend({
		
			el: "#landing",

			events: {
				"click #update": "updateModel"
			},

			initialize: function () {
				this.model = new Model();
				this.model.fetch();
			},

			render: function () {
				var that = this;

				Util.dustRender(this.$el.attr("id"), this.model, this.$el);

				this.model.on("change", function() {
					that.render.apply(that);
				});
			},

			updateModel: function (event) {
				this.model.setModel("appName", this.$("#appName").val());
			}
		});
		
		return View;
	}
);
