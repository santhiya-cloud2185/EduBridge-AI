import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import api from "../../api/api";

const InterviewPrep = () => {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    if (!role) {
      alert("Please enter a job role.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/interview", {
        role: role,
      });

      setQuestions(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate interview questions.");
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
            Interview Preparation
          </h1>

          <p className="mt-2 text-gray-600">
            Generate interview questions based on your desired job role.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Job Role
            </label>

            <input
              type="text"
              placeholder="Example: Frontend Developer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={generateQuestions}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>
        </div>

        {/* Response */}
        <div className="bg-white rounded-2xl shadow-md p-8 min-h-[280px]">
          <h2 className="text-xl font-semibold mb-4">
            Interview Questions
          </h2>

          {!questions ? (
            <p className="text-gray-500">
              AI-generated interview questions will appear here.
            </p>
          ) : (
            <pre className="whitespace-pre-wrap text-sm">
              {JSON.stringify(questions, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default InterviewPrep;
