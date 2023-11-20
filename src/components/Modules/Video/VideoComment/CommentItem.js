import { useState } from 'react';
import { HorizontalThreeDots } from '@/components/Icons/regular';
import Images from '@/components/Images';

// import { AccountPreview } from '../../Popper';
import { LikeButton } from '../../Buttons/SpecialButtons';

// CSS styles
import classNames from 'classnames/bind';
import Styles from './VideoComment.module.scss';
const cx = classNames.bind(Styles);

function CommentItem() {
    const [like, setLike] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <div className={cx('item')} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <a href="/profile/sondnf8pro" className={cx('avatar')}>
                <Images src="a" alt="avatar" />
            </a>
            <div className={cx('item-content')}>
                <a href="/profile/sondnf8pro">Alaeena</a>
                <p>test</p>
                <p className={cx('extra-content')}>
                    <span>2023-07-27</span>
                    <span>Reply</span>
                </p>
            </div>
            <div className={cx('show-more', { visible })}>
                <HorizontalThreeDots />
            </div>
            <div className={cx('heart', { like })}>
                <LikeButton like={like} setLike={setLike} />
                <span>{like ? 1 : 0}</span>
            </div>
        </div>
    );
}

export default CommentItem;
