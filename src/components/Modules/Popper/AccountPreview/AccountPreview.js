import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import CustomTippy from '@tippyjs/react/headless';
import { Button } from '@/components/Modules';
import Images from '@/components/Images/Image';

import classNames from 'classnames/bind';
import Styles from './AccountPreview.module.scss';
const cx = classNames.bind(Styles);

function AccountPreview({ children, data }) {
    const { avatar, nickname, first_name, last_name, tick, followers_count, likes_count } = data;

    const renderTippy = (attrs) => (
        <div className={cx('Tippy')} {...attrs}>
            <div className={cx('Tippy-header')}>
                <Images src={avatar} alt=""></Images>
                <Button style={['primary']}>Follow</Button>
            </div>
            <div className={cx('Tippy-content')}>
                <div>
                    <span>{nickname}</span>
                    {tick && <FontAwesomeIcon icon={faCircleCheck} />}
                </div>
                <p>{first_name + last_name}</p>
            </div>
            <div className={cx('Tippy-footer')}>
                <span>
                    <strong>{followers_count}</strong>Followers
                </span>
                <span>
                    <strong>{likes_count}</strong>Likes
                </span>
            </div>
        </div>
    );
    return (
        <CustomTippy
            appendTo={document.body}
            delay={[500, 0]}
            placement="bottom-start"
            interactive
            render={renderTippy}
        >
            {children}
        </CustomTippy>
    );
}

export default AccountPreview;
