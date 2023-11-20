import { Cloud } from '@/components/Icons/fill';
import { Button } from '@/components/Modules';

import classNames from 'classnames/bind';
import Styles from './UploadFile.module.scss';
const cx = classNames.bind(Styles);

function UploadFile() {
    return (
        <div className={cx('box')}>
            <input type="file" style={{ display: 'none' }} />
            <div className={cx('content')}>
                <Cloud />
                <span className={cx('text-main')}>Select video to upload</span>
                <span className={cx('text-sub')}>Or drag and drop a file</span>
                <span className={cx('text-next')}>
                    Long videos can be split into multiple parts to get more exposure
                </span>
                <p className={cx('text-detail')}>MP4 or WebM</p>
                <p className={cx('text-detail')}>720x1280 resolution or higher</p>
                <p className={cx('text-detail')}>Up to 30 minutes</p>
                <p className={cx('text-detail')}>Less than 2 GB</p>
                <Button style={['primary', cx('button')]}>Select file</Button>
            </div>
        </div>
    );
}

export default UploadFile;
