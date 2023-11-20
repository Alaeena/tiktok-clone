import { useState } from 'react';
import { Locked } from '@/components/Icons/fill';

import classNames from 'classnames/bind';
import Styles from './UserList.module.scss';
const cx = classNames.bind(Styles);
const setting = [{ name: 'videos' }, { name: 'favorites', icon: <Locked /> }, { name: 'liked', icon: <Locked /> }];
const offset = {
    videos: { transform: 'translateX(0px)', width: 122 },
    favorites: { transform: 'translateX(122px)', width: 162 },
    liked: { transform: 'translateX(284px)', width: 131 },
};
function UserTab({ option, setOption }) {
    const [focusing, setFocusing] = useState(option);
    const value = offset[focusing];
    return (
        <div className={cx('list-tab')}>
            {setting.map(({ name, icon }, index) => {
                const displayName = name.charAt(0).toUpperCase() + name.slice(1);
                return (
                    <div
                        key={index}
                        className={cx('list-item')}
                        onClick={() => setOption(name)}
                        onMouseEnter={() => setFocusing(name)}
                        onMouseLeave={() => setFocusing(option)}
                    >
                        {icon}
                        <span>{displayName}</span>
                    </div>
                );
            })}
            <div className={cx('line')} style={value} />
        </div>
    );
}

export default UserTab;
