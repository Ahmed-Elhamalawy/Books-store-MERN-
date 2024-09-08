const express = require("express");
const router = express.Router();
const publisherController = require("../controllers/publisherController");

router.post("/Publisher-signup", publisherController.createPublisher);
router.post("/Publisher-login", publisherController.login);
router.get("/getPublishers", publisherController.getPublishers);
router.get(
  "/getPublisherBooks/:publisherId",
  publisherController.getPublisherBooks
);

module.exports = router;
