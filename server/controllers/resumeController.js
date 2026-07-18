const getResumeReview = async (req, res) => {
  res.json({
    success: true,
    score: 88,
    strengths: [
      "Strong Projects",
      "Good Technical Skills"
    ],
    improvements: [
      "Add Certifications",
      "Improve Resume Summary"
    ]
  });
};

module.exports = { getResumeReview };