const express = require("express");
const router = express.Router();
const readerController = require("../controllers/readerController");

router.post("/createReader", readerController.createReader);
router.post("/Reader-login", readerController.login);

module.exports = router;
