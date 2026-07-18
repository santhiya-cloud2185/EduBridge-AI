const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const {
  getSkillGap,
} = require("../controllers/skillGapController");

router.post(
  "/",
  [
    body("interests")
      .notEmpty()
      .withMessage("Career Goal is required"),

    body("skills")
      .notEmpty()
      .withMessage("Current Skills are required"),
  ],
  getSkillGap
);

module.exports = router;