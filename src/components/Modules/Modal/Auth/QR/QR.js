import Images from '@/components/Images/Image';
import images from '@/assets/img';

import classNames from 'classnames/bind';
import Styles from './QR.module.scss';
const cx = classNames.bind(Styles);

function QR() {
    return (
        <div className={cx('container')}>
            <div className={cx('img-container')}>
                <Images src={images.qrLogo} alt="Qr"></Images>
            </div>
            <div className={cx('bottom')}>
                <p>1. Scan with your mobile device’s camera</p>
                <p>2. Confirm login or sign up</p>
            </div>
        </div>
    );
}

export default QR;
