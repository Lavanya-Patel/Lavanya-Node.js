const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");
const cors = require('cors')
app.use(cors())

app.post("/addproduct", (req, res) => {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            const newdata = JSON.parse(data);
            newdata.products.push(req.body);
            fs.writeFile("./db.json", JSON.stringify(newdata), (err) => {
                if (err) {
                    return res.send(err);
                } else {
                    res.send("Product Added");
                }
            });
        }
    });
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            return res.send("Error reading database.");
        } else {
            let newdata = JSON.parse(data);

            if (!Array.isArray(newdata.products)) {
             res.send("Products data is not in expected format.");
            }

            newdata.products = newdata.products.filter((el) => el.id != id);

            fs.writeFile("./db.json", JSON.stringify(newdata), (err) => {
                if (err) {
                    return res.send(err);
                } else {
                    res.send("Product Deleted");
                }
            });
        }
    });
});

app.put("/update/:productid", (req, res) => {
    const { productid } = req.params;
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
       res.send(err);
        }

        let newdata = JSON.parse(data);

        const index = newdata.products.findIndex((el) => el.id == productid);
        
        if (index !== -1) {
            newdata.products[index] = { ...newdata.products[index], ...req.body };
            fs.writeFile("./db.json", JSON.stringify(newdata), (err) => {
                if (err) {
                  res.send(err);
                } else {
                    res.send("Product Updated");
                }
            });
        } else {
            res.send("Product not found");
        }
    });
});

app.get("/getproducts", (req, res) => {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            return res.send(err);
        }

        let newdata;
        try {
            newdata = JSON.parse(data);
        } catch (err) {
           res.send(err);
        }
        res.send(newdata.products);
    });
});

app.get("/getproducts/:id", (req, res) => {
    const { id } = req.params;

    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
       res.send(err);
        }

        let newdata;
        try {
            newdata = JSON.parse(data);
        } catch (err) {
             res.send(err);
        }

        const product = newdata.products.find((el) => el.id == id);
        if (product) {
            res.send(product);
        } else {
            res.send("Product not found");
        }
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});