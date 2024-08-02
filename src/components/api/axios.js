import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://f314-115-93-148-232.ngrok-free.app',
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
        // 'ngrok-skip-browser-warning': '69420',
    },
});

// 요청 인터셉터
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

/*
// 응답 인터셉터
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // 토큰이 만료되었거나 유효하지 않은 경우 처리
            localStorage.removeItem('token');
            window.location = '/login';
        }
        return Promise.reject(error);
    },
);
*/

export default instance;
