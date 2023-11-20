import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Images from '@/components/Images';

import { AccountPreview } from '@/components/Modules';
import VideoWrapper from './VideoWrapper';
import VideoAction from './VideoAction';
import { InfoContainer } from '@/components/Modules';

// CSS style
import classNames from 'classnames/bind';
import Styles from './HomeList.module.scss';
const cx = classNames.bind(Styles);

function HomeItem({ data }) {
    const { avatar } = data.user;
    return (
        <div id={data.id} className={cx('item')}>
            <AccountPreview data={data.user}>
                <Link className={cx('link')}>
                    <Images className={cx('avatar')} src={avatar} alt="avatar" />
                </Link>
            </AccountPreview>
            <div className={cx('content')}>
                <InfoContainer data={data} />
                <div className={cx('video-wrapper')}>
                    <VideoWrapper data={data} />
                    <VideoAction data={data} />
                </div>
            </div>
        </div>
    );
}
HomeItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default HomeItem;
