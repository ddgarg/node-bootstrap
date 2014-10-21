module.exports = function(app) {

	app.get("/api/landing", function(req, res) {
		res.json({
            appName: "Sample App"
		});
	});

    app.get("/api/about", function(req, res) {
        res.json({
            appName: "Sample App"
        });
    });
};
