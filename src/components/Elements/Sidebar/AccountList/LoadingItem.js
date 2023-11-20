import classNames from 'classnames/bind';

import Styles from './AccountList.module.scss';
const cx = classNames.bind(Styles);

function LoadingItem() {
    return (
        <li className={cx('item')}>
            <div className={cx('item-img')} />
            <div className={cx('item-info', 'loading')}>
                <div></div>
                <p></p>
            </div>
        </li>
    );
}

export default LoadingItem;
