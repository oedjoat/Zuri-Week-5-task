const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    
	// set header content type
	res.setHeader("Content-Type", "text/html");

	// set paths for routes
	let path = "./routes/";
	switch (req.url) {
		case "/":
			path += "index.html";
			res.statusCode = 200;
			break;
		case "/home":
			res.statusCode = 301;
            res.setHeader('Location', '/')
			res.end();
			break;
		case "/about":
			path += "about.html";
			res.statusCode = 200;
			break;
		case "/contact":
			path += "contact.html";
			res.statusCode = 200;
			break;
		default:
			path += "404.html";
			res.statusCode = 404;
			break;
	}
	// send the html files
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			res.write(data);
			res.end();
		}
	});
});

server.listen(port, "localhost", () => console.log(`Server running on port ${port}...`));