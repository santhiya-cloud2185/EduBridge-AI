const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const {
  getCareerRecommendation,
} = require("../controllers/careerController");

router.post(
  "/",
  [
    body("interests")
      .notEmpty()
      .withMessage("Interests are required"),

    body("skills")
      .notEmpty()
      .withMessage("Skills are required"),
  ],
  getCareerRecommendation
);

module.exports = router;