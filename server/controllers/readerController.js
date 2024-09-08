const Reader = require("../models/reader");
const jsend = require("jsend");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createReader = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const reader = await Reader.create({
      name,
      email,
      password: hashedPassword,
    });
    await reader.save();
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    // console.log("created-password:", password);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    console.log(reader, { token });
    res.send(jsend.success({ reader, token }));
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const reader = await Reader.findOne({ email });

    if (!reader) {
      throw new Error("user not found");
    }

    const isMatch = await bcrypt.compare(password, reader.password);
    console.log("Password:", password);
    console.log("Hashed password:", reader.password);
    console.log("Password comparison result:", isMatch);

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
    console.log(reader, { token });
    res.status(200).json(jsend.success({ reader, token }));
  } catch (error) {
    next(error);
  }
};

module.exports = { createReader, login };
