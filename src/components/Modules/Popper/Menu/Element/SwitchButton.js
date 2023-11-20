import { useState } from 'react';
import classNames from 'classnames/bind';
import Styles from '../Menu.module.scss';

const cx = classNames.bind(Styles);
function SwitchButton({ func }) {
    const [value, setValue] = useState(func.value());

    function handleClick() {
        func.onClick();
        setValue(func.value());
    }

    return (
        <button className={cx('button', { activated: value })} onClick={handleClick}>
            <span></span>
        </button>
    );
}

export default SwitchButton;
