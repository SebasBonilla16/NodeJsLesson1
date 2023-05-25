// Importing node package fs
import fs from "fs";
// Will host our URL
import http from "http";
// Port where the server will be hosted
const port = 4000; 


//req is an object containing information about the HTTP request that raised the event.
//n response to req, you use res to send back the desired HTTP response.

//The response.writeHead() (Added in v1..0) property is an inbuilt property of the ‘http’ module 
//which sends a response header to the request. 
//The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. 
//Optionally one can give a human-readable statusMessage as the second argument.

//Here we will create a server that will host our html files and grab file .fs
const server = http.createServer((req,res) => {
    // Here we are required to use our "/" in our url in order to see our second cat
    if(req.url === "/"){
       // Here we want node to let us know what HTML file we are on using our html
        console.log(req.url);
        // With writeHead we are allowing JS to grab our content with html
        res.writeHead(200,{"Content-Type": "text/html"});
        // We then use the fs.readme to grab our first cat in "index.html"
        fs.readFile("./index.html", (err,data) =>{
            // If we don't find our URL we will recieve a error
            if(err) throw err;
            res.write(data)
            // Here it will end the program
            res.end()
        });
    }


// Here we will do the same process with cat2
if(req.url === "/api"){
    console.log(req.url);
    //Create the server variable
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("./cat2.html", (err,data) =>{
        if(err)throw err;
        res.write(data);
        res.end();
    });
}
});
// Here we are telling our server to be hosted on port 4000 in our local host
server.listen(port, (err) =>{
    if(err) console.log("ERROR", err.message);
    console.log(`Listening on port ${port}`)
});