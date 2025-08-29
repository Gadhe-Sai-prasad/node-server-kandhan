const http = require("http");
const url = require("url");

//http://localhost:8000

const server = http.createServer((req,res) => {
   // console.log(req.url);
   // const {pathnname,query} = url.parse(req.url,true);
   // console.log(query);
    res.writeHead(200, "successfully done!", {"content-type" : "application/json"});
    const data = JSON.stringify ({
        "name" : " Sai prasad ",
        "age" : "22"
    });
    res.end(data);
   // console.log(pathname);
});
//console.log("Hello,Node Server!");
server.listen(8000,() => {
    console.log("HTTP Server is running on PORT: 8000");
})