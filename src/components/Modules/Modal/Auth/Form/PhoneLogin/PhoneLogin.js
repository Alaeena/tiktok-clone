import { useState } from 'react';
import Button from '@/components/Modules/Buttons';
import { PasswordInput, PhoneInput } from '../Elements';

import classNames from 'classnames/bind';
import Styles from '../Form.module.scss';
const cx = classNames.bind(Styles);

function PhoneLogin({ onClick }) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const disabled = !phone || !password;

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
    return (
        <div className={cx('container')}>
            <div className={cx('info')}>
                Phone
                <span onClick={onClick}>Login with email</span>
            </div>
            <form className={cx('form')}>
                <PhoneInput onChange={setPhone} />
                <PasswordInput validate={validate} placeholder="Password" onChange={setPassword} />

                <span className={cx('link')}>Log in with Code</span>
                {!!error && <div className={cx('error-container')}>{error}</div>}
                <Button onClick={handleSubmit} style={['primary', cx({ disabled }), cx('button')]}>
                    Log in
                </Button>
            </form>
        </div>
    );
}

export default PhoneLogin;
