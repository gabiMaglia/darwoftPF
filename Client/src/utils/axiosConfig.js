import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
  retries: 3, 
  retryDelay: axiosRetry.exponentialDelay, 
  retryCondition: (error) => {
    
    return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.code === 'ECONNABORTED';
  }
});

export default axios;