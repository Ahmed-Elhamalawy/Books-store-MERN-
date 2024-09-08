const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publisher", // Reference to the Publisher model
    },
    genre: { type: String, required: true },
    year: { type: Number, required: true },
    copies: { type: Number, required: true },
    image: { type: String },
    description: { type: String, required: true },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields automatically

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
