// import { useNavigate } from "react-router-dom";
import Axios, { AxiosRequestConfig } from 'axios';

type OriginalRequest = AxiosRequestConfig & { retry?: boolean };

const UNAUTHORIZED_STATUS = 401;

export const USER_ROLE = 4;

export const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000
});
export const handleLogout = () => {
  if (
    window.location.pathname.includes('/login') ||
    window.location.pathname.includes('/register') ||
    window.location.pathname.includes('/client/payment/offer') ||
    window.location.pathname.includes('/client/payment/register/client') ||
    window.location.pathname.includes('/client/payment/offer/success') ||
    window.location.pathname.includes('/client/payment/register/success')
  )
    return;
  localStorage.clear();
};

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token') || '';
    const token = accessToken ? JSON.parse(accessToken || '') : '';
    console.log('🚀 ~ accessToken:', accessToken);
    // if (!config.url?.includes('authenticate') && !config.url?.includes('account')) {
    //   config.url = '/api' + config.url;
    // }
    if (accessToken) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common.Authorization;
      delete config.headers.Authorization;
    }
    if (!window.location.pathname.includes('signin')) {
      config.headers['ecommerce_id'] = 1;
    }
    config.url = '/api' + config.url;
    return config;
  },
  (requestError) => {
    const isUnauthorized = requestError?.response?.status === UNAUTHORIZED_STATUS;
    if (isUnauthorized) {
      delete axiosInstance.defaults.headers.common.Authorization;
      handleLogout();
      return Promise.reject(requestError);
    }
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (responseError) => {
    const originalRequest: OriginalRequest = responseError.config;
    const isUnauthorized = responseError?.response?.status === UNAUTHORIZED_STATUS;
    if (isUnauthorized) {
      delete axiosInstance.defaults.headers.common.Authorization;
      handleLogout();
    }

    const shouldHandleToken = isUnauthorized && !!originalRequest.headers?.Authorization && !originalRequest?.retry;

    if (!shouldHandleToken || !originalRequest.headers) return Promise.reject(responseError);

    // Use accessToken from global state if originalRequest.headers.Authorization is undefined
    if (!originalRequest.headers.Authorization) {
      const accessToken = localStorage.getItem('token') || '';
      const token = accessToken ? JSON.parse(accessToken || '') : '';

      if (accessToken) {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axiosInstance(originalRequest);
      }
    }
  }
);
