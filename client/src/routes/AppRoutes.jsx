import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import CareerAI from "../pages/CareerAI/CareerAI";
import RoadmapAI from "../pages/RoadmapAI/RoadmapAI";
import SkillGap from "../pages/SkillGap/SkillGap";
import ResumeReview from "../pages/ResumeReview/ResumeReview";
import InterviewPrep from "../pages/InterviewPrep/InterviewPrep";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/career" element={<CareerAI />} />

        <Route path="/roadmap" element={<RoadmapAI />} />

        <Route path="/skill-gap" element={<SkillGap />} />

        <Route path="/resume" element={<ResumeReview />} />

        <Route path="/interview" element={<InterviewPrep />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;