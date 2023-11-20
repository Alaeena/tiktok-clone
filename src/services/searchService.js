import axios from 'axios';
import * as request from '@/utils/httpRequest';

export const getUser = async (nickname) => {
    try {
        nickname = encodeURIComponent('@' + nickname);
        const res = await request.get(`/users/${nickname}`);
        return res.data;
    } catch (error) {}
};
export const getUsers = async (q, type = 'less') => {
    try {
        const res = await request.get(`/users/search`, {
            params: { q, type },
        });

        return res.data;
    } catch (error) {}
};
export const getSuggestedUser = async (page = 1, per_page = 12) => {
    try {
        const res = await request.get(`/users/suggested`, {
            params: {
                page,
                per_page,
            },
        });
        return res.data;
    } catch (error) {}
};
export const getFollowingList = async (page = 1) => {
    try {
        const res = await axios.get(`https://tiktok.fullstack.edu.vn/api/me/followings`, {
            page,
        });
        return res.data.data;
    } catch (error) {
        return;
    }
};
