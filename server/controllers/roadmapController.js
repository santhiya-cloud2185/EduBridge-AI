const { validationResult } = require("express-validator");
const { generateRoadmap } = require("../services/aiService");

const getRoadmap = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { interests, skills } = req.body;

    const roadmap = await generateRoadmap(interests, skills);

    res.status(200).json({
      success: true,
      ...roadmap,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getRoadmap,
};