import { useNavigate } from "react-router-dom";
import {
  BrainCircuit,
  Map,
  Target,
  FileText,
  BriefcaseBusiness,
} from "lucide-react";
import Layout from "../../components/Layout/Layout";

const features = [
  {
    title: "Career Recommendation",
    description: "Discover AI-powered career suggestions.",
    icon: BrainCircuit,
    path: "/career",
  },
  {
    title: "Learning Roadmap",
    description: "Generate your personalized learning roadmap.",
    icon: Map,
    path: "/roadmap",
  },
  {
    title: "Skill Gap Analysis",
    description: "Identify missing skills for your dream role.",
    icon: Target,
    path: "/skill-gap",
  },
  {
    title: "Resume Review",
    description: "Analyze and improve your resume instantly.",
    icon: FileText,
    path: "/resume",
  },
  {
    title: "Interview Preparation",
    description: "Practice AI-generated interview questions.",
    icon: BriefcaseBusiness,
    path: "/interview",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout>
       <div className="space-y-8">
      {/* Welcome Card */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold">
          Welcome to EduBridge AI 👋
        </h1>

        <p className="mt-3 text-blue-100 max-w-2xl">
          Your intelligent career guidance platform. Explore career
          recommendations, learning roadmaps, resume analysis,
          skill gap analysis, and interview preparation—all in one place.
        </p>
      </div>

      {/* Dashboard Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          AI Tools
        </h2>

        <p className="text-gray-500 mt-1">
          Choose a feature to get started.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              onClick={() => navigate(feature.path)}
              className="cursor-pointer rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <Icon size={28} className="text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>

              <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                Open
              </button>
            </div>
          );
        })}
      </div>
    </div>
    </Layout>
   
  );
};

export default Dashboard;