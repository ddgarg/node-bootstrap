define([
	"jquery", 
	"backbone",
	"util",
	"../models/about",
	], 
	function($, Backbone, Util, Model){
	
		var View = Backbone.View.extend({
		
			el: "#about",

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
			}
		});
		
		return View;
	}
);
