const Book = require("../models/book");
const jsend = require("jsend");
const Publisher = require("../models/publisher");
const createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      publisherId,
      genre,
      year,
      copies,
      image,
      description,
    } = req.body;

    // Find the publisher by ID
    const publisher = await Publisher.findById(publisherId);
    if (!publisher) {
      return res.status(404).json({ error: "Publisher not found" });
    }

    // Create the new book
    const book = new Book({
      title,
      author,
      publisherId: publisher._id, // Assign the publisher's ID to the book
      genre,
      year,
      copies,
      image,
      description,
    });
    await book.save();

    // Add the book's ID to the publisher's books array
    publisher.books.push(book._id);
    await publisher.save();

    res.status(201).json({ book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBooksByPublisherId = async (req, res) => {
  try {
    const { publisherId } = req.params;
    const publisher = await Publisher.findById(publisherId);
    if (!publisher) {
      return res.status(404).json({ error: "Publisher not found" });
    }
    const books = await Book.find({ publisherId: publisher._id });

    res.send(jsend.success(books));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const page = req.query.p;
    const booksPerPage = 6;
    const books = await Book.find()
      .skip(page * booksPerPage)
      .limit(booksPerPage);

    res.send(jsend.success(books));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      author,
      publisherId,
      genre,
      year,
      copies,
      image,
      description,
    } = req.body;

    const book = await Book.findByIdAndUpdate(
      id,
      {
        year,
        image,
      },
      { new: true }
    );
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.send(jsend.success(book));
    console.log(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id).populate("publisherId", "name");
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.send(jsend.success(book));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  getBooksByPublisherId,
  getAllBooks,
  updateBook,
  getSingleBook,
};
