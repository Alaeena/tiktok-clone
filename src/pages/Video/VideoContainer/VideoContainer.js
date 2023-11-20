import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

import { PlayFill } from '@/components/Icons/fill';
import { HorizontalThreeDots, Exit, MoveDown } from '@/components/Icons/regular';
import { VideoProgress, VideoMusic, VideoPlayer } from '@/components/Modules';

// CSS Style
import classNames from 'classnames/bind';
import Styles from './VideoContainer.module.scss';
const cx = classNames.bind(Styles);

function VideoContainer({ data, up, down }) {
    const { thumb_url } = data;

    const [progress, setProgress] = useState(0);
    const [pausing, setPausing] = useState(false);
    const [focus, setFocus] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const background = location.state?.background || location;

    const handleChange = (e) => {
        setProgress(e.target.value / 100);
    };
    const handlePausing = () => {
        setPausing(!pausing);
    };
    return (
        <div className={cx('container')} onClick={() => handlePausing()}>
            <button className={cx('exit')} onClick={() => navigate(background)}>
                <Exit />
            </button>
            <div className={cx('browse')}>
                <HorizontalThreeDots />
            </div>
            <div className={cx('blur-background')} style={{ backgroundImage: `url(${thumb_url})` }}></div>
            <div
                className={cx('video-wrapper')}
                onMouseEnter={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
            >
                <VideoPlayer isPlaying={!pausing} data={data} progress={progress} setProgress={setProgress} />
                <VideoProgress
                    className={cx('progress')}
                    progress={progress}
                    focus={focus}
                    data={data}
                    handleChange={handleChange}
                />
                <VideoMusic className={cx('music')} />
            </div>
            {pausing && <PlayFill className={cx('play')} />}
            {down && (
                <Link className={cx('down')} to={down} state={{ background: background }}>
                    <MoveDown />
                </Link>
            )}
            {up && (
                <Link className={cx('up')} to={up} state={{ background: background }}>
                    <MoveDown />
                </Link>
            )}
        </div>
    );
}

export default VideoContainer;
