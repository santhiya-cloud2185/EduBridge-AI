const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const {
  getResumeReview,
} = require("../controllers/resumeController");

router.post(
  "/",
  [
    body("resume")
      .notEmpty()
      .withMessage("Resume text is required"),
  ],
  getResumeReview
);

module.exports = router;