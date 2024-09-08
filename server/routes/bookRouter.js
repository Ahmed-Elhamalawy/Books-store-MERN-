const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const upload = require("../middleware/multer");

router.post("/createBook", bookController.createBook);
router.get(
  "/getBooksByPublisherId/:publisherId",
  bookController.getBooksByPublisherId
);
router.get("/getAllBooks", bookController.getAllBooks);
router.get("/getSingleBook/:id", bookController.getSingleBook);
router.put(
  "/updateBook/:id",
  upload.single("image"),
  bookController.updateBook
);
module.exports = router;
