import { useState, useEffect } from 'react';
import { useVideo } from '@/hooks';

import { Locked } from '@/components/Icons/regular';
import UserVideo from './UserVideo';
import UserTab from './UserTab';

// CSS style
import classNames from 'classnames/bind';
import Styles from './UserList.module.scss';
const cx = classNames.bind(Styles);

function UserList({ data }) {
    const { list, setList } = useVideo();
    const [option, setOption] = useState('videos');
    const [playing, setPlaying] = useState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setList(data.videos), []);

    return (
        <div className={cx('wrapper')}>
            <UserTab option={option} setOption={setOption} />
            {option === 'videos' ? (
                <div className={cx('container')}>
                    {list.map((value, key) => (
                        <UserVideo key={key} playing={playing} setPlaying={setPlaying} data={value} />
                    ))}
                </div>
            ) : (
                <div className={cx('error-container')}>
                    <Locked />
                    <p>This user's {option} videos are private</p>
                    <span>
                        Videos {option.replace('es', 'ed')} by {data.nickname} are currently hidden
                    </span>
                </div>
            )}
        </div>
    );
}

export default UserList;
