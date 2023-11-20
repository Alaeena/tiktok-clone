import { useState } from 'react';
import { Comment, Share } from '@/components/Icons/fill';
import { ShareList, LikeButton, FavoriteButton } from '@/components/Modules';

import classNames from 'classnames/bind';
import Styles from './VideoAction.module.scss';
const cx = classNames.bind(Styles);

function VideoAction({ data }) {
    const { is_liked, likes_count, comments_count, shares_count } = data;
    const [like, setLike] = useState(is_liked);
    const [favorite, setFavorite] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('item', { like })}>
                <LikeButton className={cx('button')} setLike={setLike} like={like} />
                <span>{like ? likes_count + 1 : likes_count}</span>
            </div>
            <div className={cx('item')}>
                <button className={cx('button', 'disabled')}>
                    <Comment />
                </button>
                <span>{comments_count}</span>
            </div>
            <div className={cx('item', { favorite })}>
                <FavoriteButton className={cx('button')} setFavorite={setFavorite} favorite={favorite} />
                <span>{favorite ? 1 : 0}</span>
            </div>
            <div className={cx('item')}>
                <ShareList>
                    <button className={cx('button')}>
                        <Share />
                    </button>
                </ShareList>
                <span>{shares_count}</span>
            </div>
        </div>
    );
}

export default VideoAction;
