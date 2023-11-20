const KEY = 'TIKTOK_CLONE_STORAGE';
const initState = {
    theme: 'dark',
    isLogin: false,
    token: '',
    data: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get() {
        return JSON.parse(localStorage.getItem(KEY)) || initState;
    },
    set(value) {
        localStorage.setItem(KEY, JSON.stringify(value));
    },
};
