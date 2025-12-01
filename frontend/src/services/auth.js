import api from "./api";

export const register = (data) => api.post('/accounts/register/', data);
export const login = (data) => api.post('/accounts/login/', data);
export const getProfile = () => api.get('/accounts/profile/');