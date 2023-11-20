import axios from 'axios';
import { post } from '@/utils/httpRequest';

const handleError = (error) => {
    if (error.response) {
        console.log(error.response.data);
        return { message: 'Email or password are incorrect' };
    } else if (error.request) {
        console.log(error.request);
        return { message: 'No response from server' };
    } else {
        console.log('Error', error.message);
        return { message: 'There an error in the client' };
    }
};
export const LoginUser = async (email, password) => {
    try {
        const res = await post('/auth/login', { email, password });
        const token = res.meta.token;
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        return { response: { data: res.data, token } };
    } catch (error) {
        return handleError(error);
    }
};
export const RegisterUser = async (email, password) => {
    try {
        const res = await post(`/auth/register`, { type: 'email', email, password });
        const token = res.meta.token;
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        return { response: { data: res.data, token } };
    } catch (error) {
        return handleError(error);
    }
};
export const LogoutUser = async () => {
    try {
        await axios.post(`https://tiktok.fullstack.edu.vn/api/auth/logout`);
        delete axios.defaults.headers.common.Authorization;
    } catch (error) {
        return handleError(error);
    }
};
