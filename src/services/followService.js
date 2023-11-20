import axios from 'axios';

export const followUser = async (id) => {
    try {
        const res = await axios.post(`https://tiktok.fullstack.edu.vn/api/users/${id}/follow`);
        return res.data.data;
    } catch (error) {}
};
export const unfollowUser = async (id) => {
    try {
        const res = await axios.post(`https://tiktok.fullstack.edu.vn/api/users/${id}/unfollow`);
        return res.data.data;
    } catch (error) {}
};
