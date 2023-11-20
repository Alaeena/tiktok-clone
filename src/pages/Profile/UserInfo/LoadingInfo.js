import classNames from 'classnames/bind';
import Styles from './UserInfo.module.scss';
const cx = classNames.bind(Styles);

function UserInfo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('share-info')}>
                <div className={cx('avatar')}>
                    <div className="loading" alt=""></div>
                </div>
                <div className={cx('share-info__container')}>
                    <span className="loading"></span>
                    <span className="loading"></span>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
