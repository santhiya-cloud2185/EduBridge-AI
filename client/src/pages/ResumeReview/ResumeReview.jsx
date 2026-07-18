import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import api from "../../api/api";

const ResumeReview = () => {
  const [resume, setResume] = useState("");
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    if (!resume) {
      alert("Please paste your resume.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/resume", {
        resume: resume,
      });

      setReview(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze resume.");
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
            Resume Review
          </h1>

          <p className="mt-2 text-gray-600">
            Paste your resume below and receive AI-powered feedback to improve
            its quality.
          </p>
        </div>

        {/* Resume Input */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Resume Content
            </label>

            <textarea
              rows="14"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Paste your complete resume here..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={analyzeResume}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>

        {/* Response */}
        <div className="bg-white rounded-2xl shadow-md p-8 min-h-[280px]">
          <h2 className="text-xl font-semibold mb-4">
            AI Feedback
          </h2>

          {!review ? (
            <p className="text-gray-500">
              Resume analysis and improvement suggestions will appear here.
            </p>
          ) : (
            <pre className="whitespace-pre-wrap text-sm">
              {JSON.stringify(review, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ResumeReview;