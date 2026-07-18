import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import api from "../../api/api";

const SkillGap = () => {
  const [skills, setSkills] = useState("");
  const [role, setRole] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSkillGap = async () => {
    if (!role || !skills) {
      alert("Please enter your Desired Role and Current Skills.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/skill-gap", {
        interests: role,
        skills: skills,
      });

      setAnalysis(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze skill gap.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Skill Gap Analysis
          </h1>

          <p className="mt-2 text-gray-600">
            Compare your current skills with your desired role and discover
            the skills you need to learn.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Current Skills
            </label>

            <textarea
              rows="5"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Example: HTML, CSS, JavaScript, React"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Desired Role
            </label>

            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Example: Full Stack Developer"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={analyzeSkillGap}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Analyzing..." : "Analyze Skill Gap"}
          </button>
        </div>

        {/* Response */}
        <div className="bg-white rounded-2xl shadow-md p-8 min-h-[250px]">
          <h2 className="text-xl font-semibold mb-4">
            AI Analysis
          </h2>

          {!analysis ? (
            <p className="text-gray-500">
              Missing skills and learning suggestions will appear here.
            </p>
          ) : (
            <pre className="whitespace-pre-wrap text-sm">
              {JSON.stringify(analysis, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SkillGap;