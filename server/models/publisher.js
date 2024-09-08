const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const publisherSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book", // Reference to the Book model
      },
    ],
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields automatically

const Publisher = mongoose.model("Publisher", publisherSchema);
module.exports = Publisher;
