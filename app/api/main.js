import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://your-api-base-url.com",
  headers: {
    "Content-Type": "application/json",
  "Authorization": "Bearer {{agent-jwt}}",
  },
});
console.log(process.env.NEXT_REGISTER_API)
export const postData = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error("API Post Error:", error);
    throw error;
  }
};

export default api;
