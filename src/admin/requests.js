import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const response = await axios.post("/refreshToken");
      const token = response.data.token;

      localStorage.setItem("token", token);
      axios.defaults.headers["Authorization"] = `Bearer ${token}`;
      originalRequest.headers["Authorization"] = `Bearer ${token}`;

      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
)

export default axios;