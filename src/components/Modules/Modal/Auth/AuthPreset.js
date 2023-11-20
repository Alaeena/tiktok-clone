import * as brand from '@/components/Icons/brand';
import { Register, Login, PhoneLogin, PhoneRegister } from './Form';
import QR from './QR';

//------------------// Login System//------------------//
const QRContent = {
    title: 'Log in with QR code',
    license: false,
    content: { component: QR },
};
const LoginContent = {
    title: 'Log in',
    license: false,
    content: { component: Login },
};
const PhoneLoginContent = {
    title: 'Log in',
    license: false,
    content: { component: PhoneLogin, to: LoginContent },
};
LoginContent.content.to = PhoneLoginContent;
//------------------// Register System//------------------//
const RegisterContent = {
    title: 'Sign up',
    license: true,
    content: { component: Register },
};
const PhoneRegisterContent = {
    title: 'Sign up',
    license: true,
    content: { component: PhoneRegister, to: RegisterContent },
};
RegisterContent.content.to = PhoneRegisterContent;

//------------------//  CONTENT//------------------//
const MainLoginContent = {
    title: 'Log in to TikTok',
    license: true,
    content: [
        { icon: brand.QR, title: ' Use QR code', to: QRContent },
        { icon: brand.Phone, title: 'Use phone / email/ username', to: PhoneLoginContent },
        { icon: brand.Facebook, title: 'Continue with Facebook' },
        { icon: brand.Google, title: 'Continue with Google' },
        { icon: brand.Twitter, title: 'Continue with Twitter' },
        { icon: brand.Line, title: 'Continue with LINE' },
        { icon: brand.KakaoTalk, title: 'Continue with KakaoTalk' },
        { icon: brand.Apple, title: 'Continue with Apple' },
        { icon: brand.Instagram, title: 'Continue with Instagram' },
    ],
};
const MainRegisterContent = {
    title: 'Sign up for TikTok',
    license: true,
    content: [
        { icon: brand.Phone, title: 'Use phone or email', to: PhoneRegisterContent },
        { icon: brand.Facebook, title: 'Continue with Facebook' },
        { icon: brand.Google, title: 'Continue with Google' },
        { icon: brand.Twitter, title: 'Continue with Twitter' },
        { icon: brand.Line, title: 'Continue with LINE' },
        { icon: brand.KakaoTalk, title: 'Continue with KakaoTalk' },
    ],
};
const login = {
    footer: "Don't have an account?",
    link: 'Sign up',
    content: MainLoginContent,
    limit: 9,
};
const register = {
    footer: 'Already have an account?',
    link: 'Log in',
    content: MainRegisterContent,
    limit: 3,
};
const Preset = { login, register };
export default Preset;
