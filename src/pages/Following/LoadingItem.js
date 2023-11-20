// CSS style
import classNames from 'classnames/bind';
import Styles from './Following.module.scss';
const cx = classNames.bind(Styles);

function LoadingItem({ data }) {
    return (
        <div className={cx('item')}>
            <div className={cx('background')}>
                <div className="loading"></div>
            </div>
        </div>
    );
}

export default LoadingItem;
