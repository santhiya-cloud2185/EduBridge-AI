import axios from "axios";

const api = axios.create({
    baseURL: "https://edubridge-ai-7pho.onrender.com/api"
});

export default api;