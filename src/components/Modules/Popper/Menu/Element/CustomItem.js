import { useState } from 'react';

import classNames from 'classnames/bind';
import Styles from '../Menu.module.scss';
const cx = classNames.bind(Styles);

function CustomItem({ wrapper, icon, title, style }) {
    const [visible, setVisible] = useState(false);
    const classes = cx('item', ...style);
    const Component = wrapper;

    return (
        <>
            <li className={classes} onClick={() => setVisible(true)}>
                <div>
                    {icon}
                    <span>{title}</span>
                </div>
            </li>
            <Component visible={visible} setVisible={() => setVisible(false)}></Component>
        </>
    );
}

export default CustomItem;
