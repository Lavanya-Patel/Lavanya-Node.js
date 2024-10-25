
const express = require("express");
const { connection } = require("./db");
const cors = require('cors');
const BookModel = require("./models/book");
const userRouter = require("./controllers/bookController");
const app = express();
app.use(cors())
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();


app.use("/Book",userRouter)
const PORT=process.env.PORT || 8080
app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
});