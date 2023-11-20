import { useEffect, useState } from 'react';
import { Error } from '@/components/Icons/regular';

import classNames from 'classnames/bind';
import Styles from '../Element.module.scss';
const cx = classNames.bind(Styles);

function TextInput({ onChange }) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (!value) {
            return;
        }
        const timerId = setTimeout(() => {
            const msg = validate();
            const sentValue = !msg ? value : '';
            onChange(sentValue);
        }, 500);
        return () => clearTimeout(timerId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    const validate = () => {
        const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const msg = !!value && value.match(regx) ? '' : 'Please enter a valid email';
        return msg;
    };
    const handleBlur = () => {
        const msg = validate();
        if (!!msg) {
            setError(msg);
        }
    };
    const handleChange = (targetValue) => {
        setValue(targetValue);
        if (!!error) {
            setError('');
        }
    };
    return (
        <div className={cx('form-group', { error: !!error })}>
            <div className={cx('form-wrapper')}>
                <input
                    spellCheck={false}
                    placeholder="Email address"
                    onChange={(e) => handleChange(e.target.value)}
                    onBlur={handleBlur}
                    value={value}
                />
                {!!error && (
                    <div className={cx('icon-container')}>
                        <Error className={cx('icon-error')} />
                    </div>
                )}
            </div>
            {!!error && <span>{error}</span>}
        </div>
    );
}

export default TextInput;
