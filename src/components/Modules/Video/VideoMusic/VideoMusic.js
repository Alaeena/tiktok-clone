import { useState } from 'react';
import { useVideo } from '@/hooks';

import { SongMuted } from '@/components/Icons/regular';
import { SongPlaying } from '@/components/Icons/fill';

// CSS style
import classNames from 'classnames';
import clsx from 'classnames/bind';
import Styles from './VideoMusic.module.scss';
const cx = clsx.bind(Styles);
var timerId;

function VideoMusic({ className }) {
    const { volume, muted, toggle, setVolume } = useVideo();
    const [focus, setFocus] = useState(false);

    const handleLeave = () => {
        timerId = setTimeout(() => {
            setFocus(false);
        }, 500);
    };
    const handleEnter = () => {
        clearTimeout(timerId);
        setFocus(true);
    };
    const handleChange = (e) => {
        setVolume(e.target.value);
    };
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={classNames(Styles.container, className)}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <div className={cx('slider-container', { focus })}>
                <input
                    className={cx('slider')}
                    onChange={handleChange}
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    style={{ backgroundImage: `linear-gradient(to right, #fff ${volume}%, #999 0%)` }}
                    value={volume}
                />
            </div>
            <div className={cx('voice')}>
                {muted ? <SongMuted onClick={toggle} /> : <SongPlaying onClick={toggle} />}
            </div>
        </div>
    );
}

export default VideoMusic;
