import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Tera backend URL
});

// Yeh interceptor har request se pehle check karega ki kya hamare paas token hai
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;