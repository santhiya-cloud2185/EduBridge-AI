const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const {
  getInterviewQuestions,
} = require("../controllers/interviewController");

router.post(
  "/",
  [
    body("role")
      .notEmpty()
      .withMessage("Job Role is required"),
  ],
  getInterviewQuestions
);

module.exports = router;