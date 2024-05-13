

import axios from 'axios';
import axiosRetry from 'axios-retry';


const axiosInstance = axios.create();

const axiosAuthInstance = axios.create();

const setupRetry = (instance) => {
  axiosRetry(instance, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) =>
      axiosRetry.isNetworkOrIdempotentRequestError(error) || error.code === 'ECONNABORTED',
  });
};

setupRetry(axiosInstance);
setupRetry(axiosAuthInstance);

axiosAuthInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export { axiosInstance, axiosAuthInstance };