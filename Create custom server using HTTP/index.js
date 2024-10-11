

const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
    console.log(req.method, req.url); 
    if (req.method == "GET" && req.url == "/home") {
        res.end("Welcome To our API");
    } else if (req.method == "GET" && req.url == "/about") {
        res.end("This is about page");


    } else if (req.method == "GET" && req.url == "/getproductdata") {
        fs.readFile("./db.json", "utf-8", (err,products) => {
                if (err) {
                    console.log(err);
                } else {
                    const dbdatafromapi =JSON.parse(products)
                    res.end(JSON.stringify(dbdatafromapi.products));
                }
            });
            
      

    } else if (req.method == "GET" && req.url == "/user") {
        fs.readFile("./db.json", "utf-8", (err,user) => {
            if (err) {
                console.log(err);
            } else {
                const dbdatafromapi =JSON.parse(user)
                res.end(JSON.stringify(dbdatafromapi.user));
            }
        });
    }
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});