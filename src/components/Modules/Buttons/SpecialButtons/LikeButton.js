import { useState } from 'react';
import { useAuth } from '@/hooks';
import { Auth } from '../../Modal';

import { Heart } from '@/components/Icons/fill';
import images from '@/assets/img';

// CSS style
import classNames from 'classnames';
import clsx from 'classnames/bind';
import Styles from './SpecialButtons.module.scss';
const cx = clsx.bind(Styles);

function LikeButton({ className, setLike, like }) {
    const { state } = useAuth();
    const [visible, setVisible] = useState(false);

    const handleLike = () => {
        if (state.isLogin) {
            setLike(!like);
        } else {
            setVisible(true);
        }
    };
    return (
        <button onClick={handleLike} className={classNames(Styles.button, className)}>
            <div className={cx('heart-img', { like })} style={{ backgroundImage: `url(${images.heart})` }}></div>
            <Heart />
            <Auth visible={visible} setVisible={() => setVisible(false)} type={'login'} from={'videoAction'} />
        </button>
    );
}

export default LikeButton;
