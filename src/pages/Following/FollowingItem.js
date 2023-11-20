import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { SubscribeButton } from '@/components/Modules';
import Images from '@/components/Images';

// CSS style
import classNames from 'classnames/bind';
import Styles from './Following.module.scss';
const cx = classNames.bind(Styles);

function FollowingItem({ data, setPlaying, playing }) {
    const { nickname, last_name, first_name, avatar, is_followed, id, tick } = data;
    const { file_url, thumb_url } = data.popular_video;
    const [videoRef, setVideoRef] = useState();

    const onRefChange = useCallback((node) => setVideoRef(node), []);
    const isPlaying = playing === id;
    if (videoRef) {
        if (isPlaying) {
            videoRef.currentTime = 0;
            videoRef.play();
        } else {
            videoRef.pause();
        }
    }
    return (
        <Link to={`/profile/${nickname}`} className={cx('item')} onMouseEnter={() => setPlaying(id)}>
            <div className={cx('content')}>
                <div className={cx('background', { isPlaying })}>
                    <img src={thumb_url} alt="background" />
                    <video ref={onRefChange} preload="auto" src={file_url} muted loop />
                </div>
                <div className={cx('infoContainer')}>
                    <Images alt="avatar" className={cx('avatar')} src={avatar} />
                    <h3 className={cx('header')}>{first_name + ' ' + last_name}</h3>
                    <h4 className={cx('text')}>
                        <span>{nickname}</span>
                        {tick && <FontAwesomeIcon icon={faCircleCheck} />}
                    </h4>
                    <SubscribeButton
                        id={id}
                        is_followed={is_followed}
                        style={['blackPrimary', cx('button')]}
                        allowUnsubscribe={true}
                    />
                </div>
            </div>
        </Link>
    );
}

export default FollowingItem;
