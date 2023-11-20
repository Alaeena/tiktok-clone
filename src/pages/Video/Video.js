import { useParams } from 'react-router-dom';
import { useVideo } from '@/hooks';
import { useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import VideoContainer from './VideoContainer';
import VideoContent from './VideoContent';

// CSS Style
import classNames from 'classnames/bind';
import Styles from './Video.module.scss';
const cx = classNames.bind(Styles);

function Video() {
    const modalRef = useRef();
    const { list, setDisabled } = useVideo();
    const { videoId } = useParams();
    const index = list.findIndex((video) => {
        return video.id === Number(videoId);
    });

    const data = list[index];
    const down = index < list.length - 1 && `/video/${list[index + 1].id}`;
    const up = index > 0 && `/video/${list[index - 1].id}`;
    document.getElementById(videoId).scrollIntoView();

    useEffect(() => {
        const observerRefValue = modalRef.current;
        setDisabled(true);
        disableBodyScroll(observerRefValue);
        return () => {
            setDisabled(false);
            if (observerRefValue) {
                enableBodyScroll(observerRefValue);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div ref={modalRef} className={cx('overlay')}>
            {index >= 0 && (
                <>
                    <VideoContainer data={data} down={down} up={up} />
                    <VideoContent data={data} />
                </>
            )}
        </div>
    );
}

export default Video;
