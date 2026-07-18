import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Map,
  Target,
  FileText,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Career Recommendation",
    description:
      "Receive AI-powered career suggestions based on your interests and skills.",
    icon: BrainCircuit,
  },
  {
    title: "Learning Roadmap",
    description:
      "Generate a personalized roadmap to achieve your dream career.",
    icon: Map,
  },
  {
    title: "Skill Gap Analysis",
    description:
      "Identify missing skills and learn what to improve next.",
    icon: Target,
  },
  {
    title: "Resume Review",
    description:
      "Analyze your resume and get AI-based improvement suggestions.",
    icon: FileText,
  },
  {
    title: "Interview Preparation",
    description:
      "Practice interview questions tailored to your target job role.",
    icon: BriefcaseBusiness,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            EduBridge AI
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-8">
            An AI-powered career guidance platform that helps students discover
            suitable careers, identify skill gaps, generate learning roadmaps,
            improve resumes, and prepare for interviews.
          </p>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex-1">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800">
            AI Features
          </h2>

          <p className="text-gray-600 mt-3">
            Everything you need to plan your career in one place.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                  <Icon className="text-blue-600" size={28} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} EduBridge AI. All Rights Reserved.</p>

          <p className="text-sm text-gray-400">
            Empowering Students with AI Career Guidance
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;