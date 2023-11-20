import UploadFile from './UploadFile/UploadFile';

import classNames from 'classnames/bind';
import Styles from './Upload.module.scss';
const cx = classNames.bind(Styles);

function Upload() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <UploadFile />
            </div>
        </div>
    );
}

export default Upload;
