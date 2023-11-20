import * as regular from '@/components/Icons/regular';

import classNames from 'classnames/bind';
import Styles from './Discover.module.scss';
const cx = classNames.bind(Styles);

function Discover({ title }) {
    return (
        <div className={cx('container')}>
            <h3 className={cx('header')}>{title}</h3>
            <div>
                <button className={cx('item')}>
                    <regular.Hashtag />
                    <span>suthatla</span>
                </button>
                <button className={cx('item')}>
                    <regular.Hashtag />
                    <span>mackedoi</span>
                </button>
                <button className={cx('item')}>
                    <regular.Hashtag />
                    <span>sansangthaydoi</span>
                </button>
                <button className={cx('item')}>
                    <regular.Music />
                    <span> Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n</span>
                </button>
                <button className={cx('item')}>
                    <regular.Music />
                    <span>Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng</span>
                </button>
                <button className={cx('item')}>
                    <regular.Music />
                    <span>Thiên Thần Tình Yêu - RICKY STAR</span>
                </button>
                <button className={cx('item')}>
                    <regular.Hashtag />
                    <span>7749hieuung</span>
                </button>
                <button className={cx('item')}>
                    <regular.Hashtag />
                    <span>genzlife</span>
                </button>
                <button className={cx('item')}>
                    <regular.Music />
                    <span>Tình Đã Đầy Một Tim - Huyền Tâm Môn</span>
                </button>
                <button className={cx('item')}>
                    <regular.Music />
                    <span>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</span>
                </button>
            </div>
        </div>
    );
}

export default Discover;
