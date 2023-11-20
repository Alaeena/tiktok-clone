import { useState } from 'react';
import { MoveDown } from '@/components/Icons/regular';
import CustomTippy from '@tippyjs/react/headless';
import Content from './Content';

import Styles from './ShareList.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);

function ShareList({ children }) {
    const [number, setNumber] = useState(4);
    const handleClick = () =>{
        setNumber(Content.length)
    }
    return (
        <div>
            <CustomTippy
                interactive
                delay={[200, 200]}
                placement="bottom-start"
                hideOnClick={false}
                onHide={() => setNumber(4)}
                render={() => (
                    <ul className={cx('list')}>
                        {Content.slice(0, number).map(({ title, icon }, index) => (
                            <li key={index} className={cx('item')}>
                                {icon}
                                <span>{title}</span>
                            </li>
                        ))}
                        {number !== Content.length && (
                            <button onClick={handleClick} className={cx('toggle-button')}>
                                <MoveDown />
                            </button>
                        )}
                    </ul>
                )}
            >
                {children}
            </CustomTippy>
        </div>
    );
}

export default ShareList;
