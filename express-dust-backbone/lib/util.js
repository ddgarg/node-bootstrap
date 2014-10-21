module.exports = {

	// responds with HTML or JSON depening on ajax or non-ajax request
	respond: function (req, res, json) {
		if(req.header("X-Requested-With") == "XMLHttpRequest") {
			res.writeHead(200, { "Content-Type": "application/json" });
			res.write(JSON.stringify(json));
			res.end();
		}
		else {
			res.render("public/templates/" + json.baseTemplate,json);
		}
	}
}