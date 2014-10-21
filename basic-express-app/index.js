var express = require("express"), 
	path = require("path"),
	fs = require("fs");

var app = express();

app.configure(function(){
	app.set("port", process.env.PORT || 3000);

	app.use(express.cookieParser("your secret here"));
	app.use(express.session());
	app.use(express.static(path.join(__dirname, "/public")));
});

app.configure("development", function(){
	app.use(express.errorHandler());
});

fs.readdir("./controller", function(err, files){
    files.forEach(function(fn) {
        if(!/\.js$/.test(fn)) return;
        require("./controller/" + fn)(app);
    });
});

app.listen(app.get("port"), function(){
	console.log("Express server listening on port " + app.get("port"));
});
