const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const readerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Reader = mongoose.model("Reader", readerSchema);
module.exports = Reader;
