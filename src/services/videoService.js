import * as request from '@/utils/httpRequest';

export const getVideosList = async (page = 1) => {
    try {
        const res = await request.get(`/videos`, {
            params: {
                type: 'for-you',
                page,
            },
        });
        return res.data;
    } catch (error) {
        return;
    }
};
