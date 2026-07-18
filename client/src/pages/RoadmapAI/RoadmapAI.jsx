import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import api from "../../api/api";

const RoadmapAI = () => {
  const [goal, setGoal] = useState("");
  const [skills, setSkills] = useState("");
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {
    if (!goal || !skills) {
      alert("Please enter Career Goal and Current Skills.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/roadmap", {
        interests: goal,
        skills: skills,
      });

      setRoadmap(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate roadmap.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Learning Roadmap
          </h1>

          <p className="mt-2 text-gray-600">
            Generate a personalized learning roadmap for your desired career.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Career Goal
            </label>

            <input
              type="text"
              placeholder="Example: Full Stack Developer"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Current Skills
            </label>

            <textarea
              rows="4"
              placeholder="Example: HTML, CSS, JavaScript, React"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={generateRoadmap}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Generating..." : "Generate Roadmap"}
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 min-h-[250px]">
          <h2 className="text-xl font-semibold mb-4">
            AI Learning Roadmap
          </h2>

          {!roadmap ? (
            <p className="text-gray-500">
              Your personalized roadmap will be displayed here.
            </p>
          ) : (
            <pre className="whitespace-pre-wrap text-sm">
              {JSON.stringify(roadmap, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default RoadmapAI;