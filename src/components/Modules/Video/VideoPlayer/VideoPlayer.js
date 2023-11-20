import { useState, useCallback, useEffect } from 'react';
import { useVideo } from '@/hooks';

function VideoPlayer({ data, isPlaying, setProgress, progress, className }) {
    let { mime_type, playtime_seconds } = data.meta;
    const { file_url } = data;

    const { muted, volume } = useVideo();
    const [videoRef, setVideoRef] = useState();
    if (videoRef) {
        playtime_seconds = videoRef.duration;
    }
    useEffect(() => {
        if (videoRef && playtime_seconds) {
            const currentTime = Math.round(videoRef.currentTime * 5) / 5;
            const newTime = Math.round(progress * playtime_seconds * 5) / 5;
            if (newTime !== currentTime) {
                console.log(data);
                console.log(progress, playtime_seconds);
                videoRef.currentTime = Math.round(progress * playtime_seconds);
            }
            return;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progress]);
    const handleVideoUpdate = (e) => {
        if (playtime_seconds) {
            setProgress(e.target.currentTime / playtime_seconds);
        }
    };

    // Video state
    if (videoRef) {
        if (isPlaying) {
            videoRef.muted = muted;
            videoRef.volume = volume / 100;
            videoRef.play();
        } else {
            videoRef.pause();
        }
    }
    const onRefChange = useCallback((node) => {
        setVideoRef(node);
    }, []);
    return (
        <video
            className={className}
            ref={onRefChange}
            type={mime_type}
            src={file_url}
            onTimeUpdate={handleVideoUpdate}
            loop
            muted
        />
    );
}

export default VideoPlayer;
