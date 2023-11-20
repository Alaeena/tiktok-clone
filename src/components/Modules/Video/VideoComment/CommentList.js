import CommentBar from './CommentBar';
import CommentItem from './CommentItem';

// CSS styles
import classNames from 'classnames/bind';
import Styles from './VideoComment.module.scss';
const cx = classNames.bind(Styles);

function CommentList({data}) {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <CommentItem />
                    <CommentItem />
                </div>
            </div>
            <CommentBar />
        </>
    );
}

export default CommentList;
