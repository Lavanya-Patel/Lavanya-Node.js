
const mongoose =require("mongoose")

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    year :{type:Number,required:true},
    description: { type: String, required: true },
    image: { type: String, required: true },
    ISBN: { type: String, required: true }
});

const BookModel = mongoose.model("Book", BookSchema);

module.exports=BookModel
