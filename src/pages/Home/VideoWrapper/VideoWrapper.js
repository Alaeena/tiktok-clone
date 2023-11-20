import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useVideo } from '@/hooks';
// CSS style
import { Flag } from '@/components/Icons/regular';
import { StopFill, PlayFill } from '@/components/Icons/fill';
import { VideoMusic, VideoProgress, VideoPlayer } from '@/components/Modules';

import classNames from 'classnames/bind';
import Styles from './VideoWrapper.module.scss';
const cx = classNames.bind(Styles);

function VideoWrapper({ data }) {
    // Video data
    const location = useLocation();
    const navigate = useNavigate();

    const { playing } = useVideo();
    const { video } = data.meta;
    const { thumb_url, id } = data;

    // Video state
    const [progress, setProgress] = useState(0);
    const [pausing, setPausing] = useState(false);
    const [focus, setFocus] = useState(false);
    // Video variable
    const displayType = video.resolution_x > video.resolution_y ? 'landscape' : 'portrait';
    const isPlaying = playing === id;

    const handleChange = (e) => {
        setProgress(e.target.value / 100);
    };
    const handlePausing = (e) => {
        e.stopPropagation();
        setPausing(!pausing);
    };
    return (
        <div
            onClick={() => navigate(`/video/${id}`, { state: { background: location } })}
            className={cx('video', { displayType })}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
        >
            <div className={cx('video-container', { isPlaying })}>
                <VideoPlayer
                    data={data}
                    isPlaying={isPlaying && !pausing}
                    progress={progress}
                    setProgress={setProgress}
                />
                <img src={thumb_url} alt="video" />
            </div>
            <VideoMusic />
            {/* ------ /FOCUS LINE/ ------ */}
            <div className={cx('video-report', { focus })}>
                <Flag />
                report
            </div>
            <div className={cx('video-play', { focus })}>
                {!pausing && isPlaying ? <StopFill onClick={handlePausing} /> : <PlayFill onClick={handlePausing} />}
            </div>
            <VideoProgress isPlaying={isPlaying} handleChange={handleChange} data={data} progress={progress} />
        </div>
    );
}

export default VideoWrapper;
