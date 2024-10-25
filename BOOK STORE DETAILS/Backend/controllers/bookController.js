const express=require("express");
const BookModel = require("../models/book");
const userRouter=express.Router()

userRouter.get("/getbook", async (req, res) => {
    try {
        const data = await BookModel.find();
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

userRouter.post("/create", async (req, res) => {
    try {
        await BookModel.create(req.body);
        res.send("Book Created Successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

userRouter.get("/getonebook/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await BookModel.findById(id);
        if (!data) {
            return res.status(404).send("Book not found");
        }
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
userRouter.get("/Singlebook/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await BookModel.findById(id);
        if (!data) {
            return res.status(404).send("Book not found");
        }
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

userRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await BookModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).send("Book not found");
        }
        res.send("Book Deleted Successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

userRouter.put("/updatebook/:id", async (req, res) => {
    const { id } = req.params;
    const { price } = req.body;
    try {
        await BookModel.findByIdAndUpdate(id, { $set: { price } });
        res.send("Update Successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});
module.exports=userRouter