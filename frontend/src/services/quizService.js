import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function saveScore(user, pontos) {
  return axios.post(`${API_BASE_URL}/scores`, { user, pontos });
}

export async function fetchRanking() {
  const res = await axios.get(`${API_BASE_URL}/scores`);
  return res.data; // array de { user, pontos, timestamp }
}