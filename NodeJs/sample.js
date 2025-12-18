const http = require("http")

const server = http.createServer((request,response) => {
    console.log("Server is created");
    response.write("HTTP Server got created");
    response.end();
    
});
server.listen("4000");