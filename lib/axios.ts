import Axios, { InternalAxiosRequestConfig } from 'axios';
import { Alert } from 'react-native';

import { getToken } from '@/services/tokenService';

async function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = await getToken();
  console.log(token, 'interceptor');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: 'https://check-me.onrender.com',
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    Alert.alert(message);
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });

    return Promise.reject(error);
  }
);
