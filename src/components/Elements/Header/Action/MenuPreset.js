import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import { Logout } from '@/components/Modules';
import Storage from '@/utils/Storage';

import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faCoins,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const Langues = [
    { title: 'English' },
    { title: 'العربية' },
    { title: 'বাঙ্গালি (ভারত)' },
    { title: 'Cebuano (Pilipinas)' },
    { title: 'Čeština (Česká republika)' },
    { title: 'Deutsch' },
    { title: 'Ελληνικά (Ελλάδα)' },
    { title: 'Español' },
    { title: 'Suomi (Suomi)' },
    { title: 'Filipino (Pilipinas)' },
    { title: 'Français' },
    { title: 'עברית (ישראל)' },
    { title: 'हिंदी' },
    { title: 'Magyar (Magyarország)' },
    { title: 'Bahasa Indonesia (Indonesia)' },
    { title: 'Italiano (Italia)' },
    { title: '日本語（日本）' },
    { title: 'Basa Jawa (Indonesia)' },
    { title: 'ខ្មែរ (កម្ពុជា)' },
    { title: '한국어 (대한민국)' },
    { title: 'Bahasa Melayu (Malaysia)' },
    { title: 'မြန်မာ (မြန်မာ)' },
    { title: 'Nederlands (Nederland)' },
    { title: 'Polski (Polska)' },
    { title: 'Português (Brasil)' },
    { title: 'Română (Romania)' },
    { title: 'Русский (Россия)' },
    { title: 'Svenska (Sverige)' },
    { title: 'ไทย (ไทย)' },
    { title: 'Türkçe (Türkiye)' },
    { title: 'Українська (Україна)' },
    { title: 'اردو' },
    { title: 'Tiếng Việt (Việt Nam)' },
    { title: '简体中文' },
    { title: '繁體中文' },
];
export const DefaultMenu = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Langue',
            data: Langues,
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
        func: {
            onClick: () => {
                const state = Storage.get();
                const theme = state.theme === 'light' ? 'dark' : 'light';
                document.body.setAttribute('data-theme', theme);
                Storage.set({ ...state, theme });
            },
            value: () => Storage.get().theme === 'dark',
        },
    },
];
export const UserMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
    },
    ...DefaultMenu,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        style: ['last'],
        wrapper: Logout,
    },
];
