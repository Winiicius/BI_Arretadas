import axios from 'axios'
// const baseURL = "https://arretadas-api-qdkzaivqyq-ue.a.run.app/",
const baseURL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL,
  headers: { 'Content-type': 'application/json' }
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
