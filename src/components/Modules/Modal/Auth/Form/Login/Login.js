import { useState, useLayoutEffect } from 'react';
import { useAuth } from '@/hooks';
import { LoginUser } from '@/services/authService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { PasswordInput, TextInput } from '../Elements';
import { Button } from '@/components/Modules';

import classNames from 'classnames/bind';
import Styles from '../Form.module.scss';
const cx = classNames.bind(Styles);

function Login({ onClick }) {
    const { action } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');
    const disabled = !username || !password;
    useLayoutEffect(() => {
        if (!!error) {
            setError('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username, password]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { message, response } = await LoginUser(username, password);
        setLoading(false);
        if (message) {
            setError(message);
        } else {
            action.Login(response);
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
                Email or Username
                <span onClick={onClick}>Login with phone</span>
            </div>
            <form className={cx('form')}>
                <TextInput onChange={setUsername} />
                <PasswordInput validate={validate} placeholder="Password" onChange={setPassword} />

                <span className={cx('link')}>Forget password?</span>
                {!!error && <div className={cx('error-container')}>{error}</div>}
                <Button onClick={handleSubmit} style={['primary', cx({ disabled }), cx('button')]}>
                    {loading ? <FontAwesomeIcon icon={faSpinner} className={cx('loading')} /> : 'Log in'}
                </Button>
            </form>
        </div>
    );
}

export default Login;
