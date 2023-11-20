import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { LikeButton, FavoriteButton, ShareList } from '@/components/Modules';
import { Comment, Share } from '@/components/Icons/fill';
import * as brand from '@/components/Icons/brand';

// CSS Style
import classNames from 'classnames/bind';
import Styles from './VideoInfo.module.scss';
const cx = classNames.bind(Styles);
const Content = [
    {
        title: 'Copy link',
        icon: <brand.Copylink/>,
    },
    {
        title: 'Share to Telegram',
        icon: <brand.Telegram/>,
    },
    {
        title: 'Share to Facebook',
        icon: <brand.Facebook/>,
    },
    {
        title: 'Share to WhatsApp',
        icon: <brand.WhatsApp/>,
    },
    {
        title: 'Share to Twitter',
        icon: <brand.Twitter/>,
    },
];
function VideoInfo({data}) {
    const { videoId } = useParams;
    const { is_liked, likes_count, comments_count } = data;
    const [like, setLike] = useState(is_liked);
    const [favorite, setFavorite] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('option')}>
                <div className={cx('interactive-list')}>
                    <div className={cx( {like})}>
                        <LikeButton className={cx('button')} setLike={setLike} like={like} />
                        <span>{like ? likes_count + 1: likes_count}</span>
                    </div>
                    <div>
                        <p className={cx('button')}>
                            <Comment />
                        </p>
                        <span>{comments_count}</span>
                    </div>
                    <div className={cx({favorite})}>
                        <FavoriteButton className={cx('button')} setFavorite={setFavorite} favorite={favorite} />
                        <span>{favorite ? 1 : 0}</span>
                    </div>
                </div>
                <div className={cx('share-list')}>
                    {
                        Content.map(({title,icon},index) => 
                            <Tippy key={index} content={title} delay={[0, 200]}>
                                <div>{icon}</div>
                            </Tippy>)
                    }
                    <ShareList>
                        <div><Share /></div>
                    </ShareList>
                </div>
            </div>
            <div className={cx('link')}>
                <span>http://localhost:3000/video/{videoId}</span>
                <button>Copy link</button>
            </div>
        </div>
    );
}

export default VideoInfo;
