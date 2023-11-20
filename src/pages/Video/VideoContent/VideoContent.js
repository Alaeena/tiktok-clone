import { InfoContainer, VideoInfo, CommentList } from '@/components/Modules';
// CSS Style
import classNames from 'classnames/bind';
import Styles from './VideoContent.module.scss';
const cx = classNames.bind(Styles);

function ContentContainer({ data }) {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <div className={cx('header-top')}>
                    <InfoContainer data={data} />
                </div>
                <VideoInfo data={data} />
            </div>
            <CommentList  data={data}/>
        </div>
    );
}

export default ContentContainer;
