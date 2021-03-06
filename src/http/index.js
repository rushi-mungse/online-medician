import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials:true,
    headers: {
        'content-type': 'application/json',
         Accept: 'application/json'
    },
});

export const register = (data) => api.post('/api/register', data)
export const login = (data) => api.post('/api/login', data)

export default api