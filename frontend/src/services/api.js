import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE,
    headers: {
        'Content-Type': 'application/json',
    }
});

//Get tokens from localStorage
const getAccessToken = () => localStorage.getItem('accessToken');
const getRefreshToken = () => localStorage.getItem('refreshToken');

//Attach token to requests if available
api.interceptors.request.use(
    (config) => {
    const token = getAccessToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error)
);

//Handle token expiration
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        //If token expired and we haven't retried yet
        if (error.response && error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;

            try {
                const refreshToken = getRefreshToken();
                if (!refreshToken) {
                    return Promise.reject(error);
                }

                //Request new access token using refresh token
                const response = await axios.post(`${API_BASE}/accounts/token/refresh/`, 
                    { refresh: refreshToken }
                );

                //Save new access token
                localStorage.setItem('accessToken', response.data.access);

                //Retry original request with new token
                api.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;

                return api(originalRequest);
            } catch (refreshError) {
                console.log('Refresh token invalid, logging out user.');
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/login'; //redirect to login
            } 
        }

        return Promise.reject(error);
    }
);

export default api;