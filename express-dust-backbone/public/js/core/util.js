define([
	"jquery"
], function () {

	"use strict";

	var util = {

		dustRender: function(templateName, model, $el, callback) {
			dust.render("public/templates/" + templateName + ".dust", model.attributes || model, function(err, out) {
				if (err) {
					console.log(err);
				} else {
					if (callback) {
						callback(out);
					} else {
						$el.html(out)
					}
				}
			});
		}
	};

	return util;

});
