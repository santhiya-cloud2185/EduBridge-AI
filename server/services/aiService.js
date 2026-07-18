const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateCareerRecommendation = async (interests, skills) => {
  const prompt = `
Return ONLY valid JSON.
Do NOT use markdown.
Do NOT wrap with \`\`\`json.

Student Interests:
${interests}

Current Skills:
${skills}

Return this structure:

{
  "career":"",
  "confidence":0,
  "requiredSkills":[],
  "learningPath":[]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text.trim();

  return JSON.parse(text);
};
const generateRoadmap = async (careerGoal, currentSkills) => {
  const prompt = `
Return ONLY valid JSON.
Do NOT use markdown.
Do NOT wrap with \`\`\`.

Career Goal:
${careerGoal}

Current Skills:
${currentSkills}

Return exactly this format:

{
  "title": "",
  "roadmap": [
    {
      "phase": "",
      "duration": "",
      "topics": []
    }
  ]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
};
const generateSkillGap = async (careerGoal, currentSkills) => {
  const prompt = `
Return ONLY valid JSON.
No markdown.

Career Goal:
${careerGoal}

Current Skills:
${currentSkills}

Return:

{
 "missingSkills":[],
 "strengths":[],
 "recommendedCourses":[]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
};
const reviewResume = async (resumeText) => {

const prompt=`
Return ONLY JSON.

Review this resume.

${resumeText}

Return

{
"score":0,
"strengths":[],
"improvements":[]
}
`;

const response=await ai.models.generateContent({
model:"gemini-2.5-flash",
contents:prompt
});

const text=response.text
.replace(/```json/g,"")
.replace(/```/g,"")
.trim();

return JSON.parse(text);

};
const generateInterviewQuestions = async(role)=>{

const prompt=`
Return ONLY JSON.

Generate interview questions for

${role}

Return

{
"questions":[]
}
`;

const response=await ai.models.generateContent({

model:"gemini-2.5-flash",
contents:prompt

});

const text=response.text
.replace(/```json/g,"")
.replace(/```/g,"")
.trim();

return JSON.parse(text);

};
module.exports = {
  generateCareerRecommendation,
  generateRoadmap,
  generateSkillGap,
  reviewResume,
  generateInterviewQuestions,
};