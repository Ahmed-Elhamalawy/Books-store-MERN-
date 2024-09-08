const Publisher = require("../models/publisher");
const bcrypt = require("bcrypt");
const jsend = require("jsend");
const jwt = require("jsonwebtoken");

const createPublisher = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const publisher = await Publisher.create({
      name,
      email,
      password: hashedPassword,
    });
    await publisher.save();
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    res.send(jsend.success({ publisher, token }));
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const publisher = await Publisher.findOne({ email });
    if (!publisher) {
      throw new Error("user not found");
    }

    const isMatch = await bcrypt.compare(password, publisher.password);

    if (!isMatch) {
      throw new Error("password not match");
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    console.log(publisher, { token });

    res.status(200).json(jsend.success({ publisher, token }));
  } catch (error) {
    next(error);
  }
};

const getPublishers = async (req, res, next) => {
  try {
    const publishers = await Publisher.find().populate("books");
    res.send(jsend.success(publishers));
  } catch (error) {
    next(error);
  }
};

const getPublisherBooks = async (req, res, next) => {
  try {
    const { publisherId } = req.params;
    const books = await Publisher.findById(publisherId)
      .select("books")
      .populate("books");

    if (!books) {
      throw new Error("Publisher not found");
    }
    res.send(jsend.success(books));
  } catch (error) {
    next(error);
  }
};

module.exports = { createPublisher, login, getPublishers, getPublisherBooks };
