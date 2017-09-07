var http = require("http")
var jade = require("jade")

http.createServer(function(req, res){

	if (req.url !== "/favicon.ico") {	
		console.log("hehe...");
		res.writeHead(200, {
			"Content-Type" : "text/html"
		})

		var html = jade.renderFile("template.jade", {
			course : "jade renderFile",
			pretty : true
		})

		res.end(html)
	}

}).listen(3000, "127.0.0.1");

console.log("Server running at 3000")