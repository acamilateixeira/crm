import axios from 'axios';

// import AuthServices from '../services/auth';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use(async config => {
  // const token = AuthServices.getToken();

  // if (token) {
  config.headers.Authorization = `Bearer ${'token'}`;
  // }

  return config;
});

// api.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;

//     // if (error.response.status === 403 && !originalRequest._retry) {
//     //   originalRequest._retry = true;

//     //   await AuthServices.refresh();
//     // }

//     return Promise.reject(error);
//   }
// );

export default api;
