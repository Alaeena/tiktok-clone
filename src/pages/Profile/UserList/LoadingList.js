import { useState } from 'react';
import UserTab from './UserTab';

import classNames from 'classnames/bind';
import Styles from './UserList.module.scss';
const cx = classNames.bind(Styles);

function LoadingList() {
    const [state, setState] = useState('videos');
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    return (
        <div className={cx('wrapper')}>
            <UserTab state={state} setState={setState} />
            <div className={cx('container')}>
                {data.map((value) => (
                    <div key={value} className={cx('item-info')}>
                        <div className={cx('video-container')}>
                            <div className="loading"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LoadingList;
