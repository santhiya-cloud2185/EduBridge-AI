const express = require("express");
const cors = require("cors");

const careerRoutes = require("./routes/careerRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes");
const skillGapRoutes = require("./routes/skillGapRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const {
  notFound,
  errorHandler,
} = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 EduBridge AI Backend Running",
  });
});

// API Routes
app.use("/api/career", careerRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/skill-gap", skillGapRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;