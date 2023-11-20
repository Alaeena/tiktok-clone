import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { Play } from '@/components/Icons/regular';
import { Link } from 'react-router-dom';
import Images from '@/components/Images/Image';

import classNames from 'classnames/bind';
import Styles from './UserList.module.scss';
const cx = classNames.bind(Styles);

function UserVideo({ playing, setPlaying, data }) {
    const location = useLocation();
    const { thumb_url, file_url, description, views_count, id } = data;
    const { mime_type } = data.meta;

    const [videoRef, setVideoRef] = useState();
    const onRefChange = useCallback((node) => setVideoRef(node), []);
    const isPlaying = playing === id;

    if (videoRef) {
        if (playing === id) {
            videoRef.currentTime = 0;
            videoRef.play();
        } else {
            videoRef.pause();
        }
    }

    return (
        <Link
            to={`/video/${id}`}
            state={{ background: location }}
            className={cx('item', { isPlaying })}
            onMouseEnter={() => setPlaying(id)}
        >
            <div className={cx('item-info')}>
                <div className={cx('video-container')}>
                    <Images src={thumb_url} alt="video" />
                    <video ref={onRefChange} preload="auto" src={file_url} type={mime_type} muted loop />
                </div>
                <div className={cx('video-footer')}>
                    <Play />
                    <span>{views_count}</span>
                </div>
            </div>
            <div className={cx('item-title')}>{description}</div>
        </Link>
    );
}

export default UserVideo;
