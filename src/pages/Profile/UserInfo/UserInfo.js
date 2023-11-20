import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Chain, Share, HorizontalThreeDots } from '@/components/Icons/regular';

import Images from '@/components/Images/Image';
import { ShareList, ActionList, SubscribeButton } from '@/components/Modules';

import classNames from 'classnames/bind';
import Styles from './UserInfo.module.scss';
const cx = classNames.bind(Styles);

function UserInfo({ data }) {
    const {
        id,
        avatar,
        bio,
        is_followed,
        last_name,
        first_name,
        nickname,
        tick,
        followers_count,
        followings_count,
        likes_count,
        website_url,
    } = data;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('share-info')}>
                <Images src={avatar} alt="avatar" className={cx('avatar')}></Images>
                <div className={cx('share-info__container')}>
                    <h2>
                        {nickname}
                        {tick && <FontAwesomeIcon icon={faCircleCheck} />}
                    </h2>
                    <h3>{first_name + ' ' + last_name}</h3>
                    <SubscribeButton id={id} is_followed={is_followed} style={['primary', cx('button')]} />
                </div>
            </div>
            <div className={cx('count-info')}>
                <div className={cx('count-info__container')}>
                    <strong>{followings_count}</strong>
                    <span>Following</span>
                </div>
                <div className={cx('count-info__container')}>
                    <strong>{followers_count}</strong>
                    <span>Followers</span>
                </div>
                <div className={cx('count-info__container')}>
                    <strong>{likes_count}</strong>
                    <span>Likes</span>
                </div>
            </div>
            <h2 className={cx('share-desc')}>
                <span>{bio}</span>
            </h2>
            {website_url && (
                <div className={cx('share-link')}>
                    <Chain />
                    <span>{website_url}</span>
                </div>
            )}
            <ShareList>
                <div className={cx('share-button')}>
                    <Share />
                </div>
            </ShareList>
            <ActionList>
                <div className={cx('show-more')}>
                    <HorizontalThreeDots />
                </div>
            </ActionList>
        </div>
    );
}

export default UserInfo;
