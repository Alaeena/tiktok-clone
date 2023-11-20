import { useEffect, useState } from 'react';
import { Error, MoveDown } from '@/components/Icons/regular';
import { PhoneNumber } from '@/components/Modules/Popper';

import classNames from 'classnames/bind';
import Styles from '../Element.module.scss';
const cx = classNames.bind(Styles);

function PhoneInput({ onChange }) {
    const [visible, setVisible] = useState(false);
    const [phone, setPhone] = useState('+84');
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (!value) {
            return;
        }
        const timerId = setTimeout(() => {
            const msg = validate(value);
            const sentValue = !msg ? value : '';
            onChange(sentValue);
        }, 500);
        return () => clearTimeout(timerId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    const onClick = (value) => {
        setPhone(value);
        setVisible(false);
    };
    const validate = () => {
        const regx = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        const msg = !!value && value.match(regx) ? '' : 'Please enter a phone number';
        return msg;
    };
    const handleBlur = () => {
        const msg = validate(value);
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
                <PhoneNumber visible={visible} setVisible={setVisible} onClick={onClick}>
                    <div onClick={() => setVisible(true)} className={cx('wrapper-option')}>
                        <span>{phone}</span>
                        <MoveDown />
                    </div>
                </PhoneNumber>
                <div className={cx('wrapper-content')}>
                    <input
                        spellCheck={false}
                        placeholder={'Phone number'}
                        value={value}
                        onChange={(e) => handleChange(e.target.value)}
                        onBlur={handleBlur}
                    />
                    {!!error && (
                        <div className={cx('icon-container')}>
                            <Error className={cx('icon-error')} />
                        </div>
                    )}
                </div>
            </div>
            <span>{error}</span>
        </div>
    );
}

export default PhoneInput;
