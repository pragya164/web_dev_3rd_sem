const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello Pragya! This is my local server.");
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//search on chrome-  {http://localhost:3000}