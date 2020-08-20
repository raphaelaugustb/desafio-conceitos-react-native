import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4888",
});

export default api;
