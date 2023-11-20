import { useState } from 'react';
import { useAuth } from '@/hooks';
import { RegisterUser } from '@/services/authService';

import { PasswordInput, TextInput } from '../Elements';
import Button from '@/components/Modules/Buttons';

// CSS Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Styles from '../Form.module.scss';
const cx = classNames.bind(Styles);

function Register({ onClick }) {
    const { action } = useAuth();

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const disabled = !username || !pass || !pass2;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { message, response } = await RegisterUser(username, pass);
        setLoading(false);
        if (message) {
            setError(message);
        } else {
            action.Login(response);
        }
    };
    const validatePass1 = (value) => {
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
                Email
                <span onClick={onClick}>Sign up with phone</span>
            </div>
            <form className={cx('form')}>
                <TextInput onChange={setUsername} />
                <PasswordInput validate={validatePass1} onChange={setPass} placeholder={'Password'} />
                <PasswordInput validate={validatePass2} onChange={setPass2} placeholder={'Enter your password again'} />

                <span className={cx('link')}>Forget password?</span>
                {!!error && <div className={cx('error-container')}>{error}</div>}
                <Button onClick={handleSubmit} style={['primary', cx({ disabled }), cx('button')]}>
                    {loading ? <FontAwesomeIcon icon={faSpinner} className={cx('loading')} /> : 'Register'}
                </Button>
            </form>
        </div>
    );
}

export default Register;
