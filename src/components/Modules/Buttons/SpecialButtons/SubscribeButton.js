import { useState } from 'react';
import { useAuth } from '@/hooks';

import { Auth } from '../../Modal';
import { followUser, unfollowUser } from '@/services';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import Styles from '../Buttons.module.scss';
const cx = classNames.bind(Styles);

function SubscribeButton({ style, is_followed, allowUnsubscribe, id }) {
    const [subscribe, setSubscribe] = useState(is_followed);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const { state, action } = useAuth();
    const text = subscribe ? (allowUnsubscribe ? 'Following' : 'Messages') : 'Follow';
    const classes = cx('wrapper', { subscribe }, ...style);

    const handleClick = (e) => {
        e.preventDefault();
        if (state.isLogin) {
            if (subscribe && allowUnsubscribe) {
                setLoading(true);
                unfollowUser(id)
                    .then((res) => {
                        action.setData(res);
                        setSubscribe(false);
                    })
                    .finally(() => setLoading(false));
            } else if (!subscribe) {
                setLoading(true);
                followUser(id)
                    .then((res) => {
                        action.setData(res);
                        setSubscribe(true);
                    })
                    .finally(() => setLoading(false));
            }
        } else {
            setVisible(true);
        }
    };
    return (
        <>
            <button className={classes} onClick={handleClick}>
                {loading ? <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> : text}
            </button>
            <Auth visible={visible} setVisible={() => setVisible(false)} type={'login'} />
        </>
    );
}

export default SubscribeButton;
