import { useState } from 'react';
import clsx from 'classnames/bind';
import Styles from './VideoProgress.module.scss';

import convert from '@/utils/convert';
import classNames from 'classnames';
const cx = clsx.bind(Styles);

function VideoProgress({ focus, handleChange, progress, data, className }) {
    const [focusController, setFocusController] = useState(false);
    const { playtime_string, playtime_seconds } = data.meta;

    const progress_string = convert(progress * playtime_seconds) + '/' + playtime_string;
    const value = progress * 100;
    return (
        <div
            className={classNames(Styles['video-controller'], { [Styles.focus]: focus }, className)}
            onMouseEnter={() => setFocusController(true)}
            onMouseLeave={() => setFocusController(false)}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={cx('slider-container', { focusController })}>
                <input
                    className={cx('slider')}
                    onClick={handleChange}
                    onChange={handleChange}
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    style={{ backgroundImage: `linear-gradient(to right, #fff ${value}%, #999 0%)` }}
                    value={value}
                />
            </div>
            <div className={cx('timer')}>{progress_string}</div>
        </div>
    );
}

export default VideoProgress;
