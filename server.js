var http =  require("http");
var fs  = require("fs");

var port = 3000

var server = http.createServer(handleRequest)

function handleRequest(req, res){

    fs.readFile(__dirname + "/index.html", function(err, data){
        if (err){
            console.log("File cannot be found")
        };
        res.writeHead(200, { "Content-type": "text/html"});
        res.end(data);
    });

}

server.listen(port, function(){
    console.log("Server is running.")
})