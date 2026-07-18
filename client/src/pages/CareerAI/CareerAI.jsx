import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import api from "../../api/api";

const CareerAI = () => {
  const [goal, setGoal] = useState("");
  const [skills, setSkills] = useState("");
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCareerRecommendation = async () => {
    if (!goal || !skills) {
      alert("Please enter both Career Goal and Current Skills.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/career", {
        interests: goal,
        skills: skills,
      });

      setCareer(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate career recommendation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="w-full p-10 bg-yellow-100">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Career Recommendation
          </h1>

          <p className="mt-2 text-gray-600">
            Enter your career goal and current skills to receive AI-powered
            career recommendations.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Career Goal
            </label>

            <input
              type="text"
              placeholder="Example: AI Engineer"
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
              rows="5"
              placeholder="Example: JavaScript, React, Python"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={getCareerRecommendation}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Generating..." : "Generate Recommendation"}
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 min-h-[220px]">
          <h2 className="text-xl font-semibold mb-4">
            AI Recommendation
          </h2>

          {!career ? (
            <p className="text-gray-500">
              Career recommendations will appear here.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-blue-600">
                  Career
                </h3>
                <p>{career.career}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-blue-600">
                  Confidence
                </h3>
                <p>{career.confidence}%</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-blue-600">
                  Required Skills
                </h3>

                <ul className="list-disc list-inside">
                  {career.requiredSkills?.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-blue-600">
                  Learning Path
                </h3>

                <ol className="list-decimal list-inside">
                  {career.learningPath?.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CareerAI;