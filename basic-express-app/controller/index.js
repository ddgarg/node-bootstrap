// implement REST methods here

module.exports = function (app) {

	app.get("/api/foo", function (req, res) {
		res.json({
			foo: "bar"
		});
	});
}
