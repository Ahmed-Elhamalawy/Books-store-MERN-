const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../middleware/multer");

router.post("/upload", upload.single("image"), (req, res) => {
  cloudinary.uploader.upload(req.file.path, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ success: false, message: "error" });
    }
    res.status(200).send({
      success: true,
      message: "Upload Successful",
      data: result,
    });
  });
});

module.exports = router;
