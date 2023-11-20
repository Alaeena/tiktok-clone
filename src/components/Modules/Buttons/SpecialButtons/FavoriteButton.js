import { useState } from 'react';
import { useAuth } from '@/hooks';
import { Auth } from '../../Modal';

import { Favorite } from '@/components/Icons/fill';
import { Circle } from '@/components/Icons/regular';

// CSS style
import classNames from 'classnames';
import clsx from 'classnames/bind';
import Styles from './SpecialButtons.module.scss';
const cx = clsx.bind(Styles);

function LikeButton({ className, setFavorite, favorite }) {
    const [visible, setVisible] = useState(false);
    const { state } = useAuth();

    const handleFavorite = () => {
        if (state.isLogin) {
            setFavorite(!favorite);
        } else {
            setVisible(true);
        }
    };
    return (
        <button onClick={handleFavorite} className={classNames(Styles.button, className)}>
            <div className={cx('favorite-icon', { favorite })}>
                <div>
                    <Favorite className={cx('fa')} />
                </div>
                <Circle className={cx('circle')} />
            </div>
            <Auth visible={visible} setVisible={() => setVisible(false)} type={'login'} from={'videoAction'} />
        </button>
    );
}

export default LikeButton;
