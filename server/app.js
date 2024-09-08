const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/db");
const readerRouter = require("./routes/readerRouter");
const publisherRouter = require("./routes/publisherRouter");
const bookRouter = require("./routes/bookRouter");
const uploadRouter = require("./controllers/uploadController");
require("dotenv").config();

const app = express();
connectDB();
//middlewares
app.use(cors());
app.use(express.json());
app.use("", readerRouter);
app.use("", publisherRouter);
app.use("", bookRouter);
app.use("", uploadRouter);

app.listen(process.env.PORT, () => {
  console.log("Server started on port 4000");
});
