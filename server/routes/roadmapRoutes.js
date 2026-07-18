const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const {
  getRoadmap,
} = require("../controllers/roadmapController");

router.post(
  "/",
  [
    body("interests").notEmpty().withMessage("Career Goal is required"),
    body("skills").notEmpty().withMessage("Skills are required"),
  ],
  getRoadmap
);

module.exports = router;