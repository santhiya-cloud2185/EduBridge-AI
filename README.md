# 🎓 EduBridge AI

An AI-powered Career Guidance Platform that helps students make informed career decisions through personalized recommendations, learning roadmaps, skill gap analysis, resume reviews, and interview preparation.

## 🚀 Features

- 🎯 AI Career Recommendation
- 🗺️ Personalized Learning Roadmap
- 📊 Skill Gap Analysis
- 📄 AI Resume Review
- 🎤 Interview Preparation
- 📱 Responsive Dashboard
- 🔗 REST API Integration

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors
- express-validator

---

## 📂 Project Structure

```
EduBridge-AI/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ✨ Modules

### Career Recommendation
Provides career suggestions based on user interests and existing skills.

### Learning Roadmap
Generates a structured learning path to achieve a selected career goal.

### Skill Gap Analysis
Identifies missing skills and recommends areas for improvement.

### Resume Review
Analyzes resume content and provides suggestions for enhancement.

### Interview Preparation
Generates interview questions tailored to the chosen job role.

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/santhiya-cloud2185/EduBridge-AI.git
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

---

## 🌐 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

GEMINI_API_KEY=your_gemini_api_key
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/career` | Career Recommendation |
| POST | `/api/roadmap` | Learning Roadmap |
| POST | `/api/skill-gap` | Skill Gap Analysis |
| POST | `/api/resume` | Resume Review |
| POST | `/api/interview` | Interview Preparation |

---

## 🔮 Future Enhancements

- Google Gemini AI Integration
- JWT Authentication
- User Profiles
- Saved Reports
- PDF Export
- Admin Dashboard
- Progress Tracking
- Cloud Deployment

---

## 👩‍💻 Developer

**Santhiya**

GitHub:
https://github.com/santhiya-cloud2185

---

## 📜 License

This project is developed for educational and hackathon purposes.