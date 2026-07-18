const { validationResult } = require("express-validator");
const {
  generateCareerRecommendation,
} = require("../services/aiService");

const getCareerRecommendation = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { interests, skills } = req.body;

    const result = await generateCareerRecommendation(
      interests,
      skills
    );

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getCareerRecommendation,
};