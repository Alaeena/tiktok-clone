import { useState, useEffect } from 'react';
import { getSuggestedUser } from '@/services';

import FollowingItem from './FollowingItem';
import LoadingItem from './LoadingItem';
// CSS style
import classNames from 'classnames/bind';
import Styles from './Following.module.scss';
const cx = classNames.bind(Styles);

function Following() {
    const [data, setData] = useState();
    const [playing, setPlaying] = useState();

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    useEffect(() => {
        getSuggestedUser().then((res) => {
            setData(res);
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            {data
                ? data.map((item, key) => (
                      <FollowingItem key={key} setPlaying={setPlaying} playing={playing} data={item} />
                  ))
                : list.map((key) => <LoadingItem key={key} />)}
        </div>
    );
}

export default Following;
