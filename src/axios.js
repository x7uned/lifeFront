import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4444',
});

instance.interceptors.request.use((cfg) => {
    cfg.headers.Authorization = window.localStorage.getItem('token');

    return cfg;
})

export default instance;