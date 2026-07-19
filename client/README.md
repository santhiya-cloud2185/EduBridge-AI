# 🚀 EduBridge AI

An AI-powered career guidance platform that helps students discover the right career path through personalized AI recommendations, skill gap analysis, learning roadmaps, resume evaluation, and interview preparation.

---

## 🌐 Live Demo

**Frontend:**
https://edu-bridge-ai-sooty.vercel.app/

**Backend API:**
https://edubridge-ai-7pho.onrender.com

**Demo Video:**
https://drive.google.com/file/d/1klFGib0diB0aBtWEQ9_F36qW_unItnX8/view?usp=sharing

---

## 📖 Overview

Choosing the right career path can be overwhelming for students due to the lack of personalized guidance. EduBridge AI addresses this challenge by leveraging Google Gemini AI to provide tailored career recommendations based on users' interests and skills.

The platform also identifies skill gaps, generates learning roadmaps, reviews resumes, and supports interview preparation, helping students confidently prepare for their future careers.

---

## ✨ Features

* 🤖 AI-Powered Career Recommendations
* 📊 Skill Gap Analysis
* 🛣️ Personalized Learning Roadmap
* 📄 Resume Review
* 💼 Interview Preparation
* 📱 Responsive User Interface
* ⚡ Fast React + Vite Frontend
* ☁️ MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Google Gemini AI
* Express Validator
* CORS
* dotenv

---

## 📂 Project Structure

```text
EduBridge-AI/
│
├── client/      # React Frontend
├── server/      # Node.js Backend
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/santhiya-cloud2185/EduBridge-AI.git
cd EduBridge-AI
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm start
```

---

## 🔑 Environment Variables

### Server (`server/.env`)

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

### Client (`client/.env`)

Development:

```env
VITE_API_URL=http://localhost:5000
```

Production:

```env
VITE_API_URL=https://edubridge-ai-7pho.onrender.com
```

---

## 🎯 Problem Statement

Many students struggle to identify suitable career paths because existing platforms often provide generic recommendations rather than personalized guidance based on individual interests and skills.

---

## 💡 Solution

EduBridge AI uses Google Gemini AI to analyze user inputs and provide intelligent career recommendations. It further assists users by identifying missing skills, recommending learning resources, reviewing resumes, and helping prepare for interviews through an easy-to-use web interface.

---

## 👩‍💻 Developed By

**Santhiya M**

Built as part of the **Academy Online Hackathon 2026**.

---

## 📜 License

This project is developed for educational and hackathon purposes.
