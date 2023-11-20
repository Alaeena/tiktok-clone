import { useState } from 'react';
import Button from '@/components/Modules/Buttons';
import { PasswordInput, PhoneInput } from '../Elements';

import classNames from 'classnames/bind';
import Styles from '../Form.module.scss';
const cx = classNames.bind(Styles);

function PhoneRegister({ onClick }) {
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');

    const [error, setError] = useState('');
    const disabled = !phone || !pass || !pass2;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (disabled) {
            setError('You input value is either invalid or missing');
        } else {
            setError('*This form is only for display only, if you want to login then please use email form*');
        }
    };
    const validate = (value) => {
        const regx = /^(?=.*?[^\w\s]).{8,}$/;
        const msg =
            !!value && value.match(regx) ? '' : 'Please enter at least 8 characters that have a special character';
        return msg;
    };
    const validatePass2 = (value) => {
        if (!pass) {
            return 'Please enter your password first';
        } else {
            const msg = pass === value ? '' : 'Your input value is different';
            return msg;
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('info')}>
                Phone
                <span onClick={onClick}>Sign up with email</span>
            </div>
            <form className={cx('form')}>
                <PhoneInput onChange={setPhone} />
                <PasswordInput validate={validate} placeholder="Password" onChange={setPass} />
                <PasswordInput validate={validatePass2} placeholder={'Enter your password again'} onChange={setPass2} />

                <span className={cx('link')}>Sign up with Code</span>
                {!!error && <div className={cx('error-container')}>{error}</div>}
                <Button onClick={handleSubmit} style={['primary', cx({ disabled }), cx('button')]}>
                    Register
                </Button>
            </form>
        </div>
    );
}

export default PhoneRegister;
