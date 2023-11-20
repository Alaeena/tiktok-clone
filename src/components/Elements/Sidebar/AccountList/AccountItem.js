import { forwardRef } from 'react';
import PropTypes from 'prop-types';

// CSS style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

// Custom Modules
import { Link } from 'react-router-dom';
import { AccountPreview } from '@/components/Modules';
import Images from '@/components/Images/Image';
import Styles from './AccountList.module.scss';
const cx = classNames.bind(Styles);

function AccountItem({ children, showTippy = false }) {
    const { avatar, nickname, first_name, last_name, tick } = children;
    const Item = forwardRef((props, ref) => (
        <Link to={`/profile/${nickname}`} ref={ref} className={cx('item')}>
            <Images className={cx('item-img')} src={avatar} alt=""></Images>
            <div className={cx('item-info')}>
                <div>
                    <span>{nickname}</span>
                    {tick && <FontAwesomeIcon icon={faCircleCheck} />}
                </div>
                <p>{first_name + last_name}</p>
            </div>
        </Link>
    ));
    return (
        <>
            {showTippy ? (
                <AccountPreview data={children}>
                    <Item />
                </AccountPreview>
            ) : (
                <Item />
            )}
        </>
    );
}
AccountItem.propTypes = {
    showTippy: PropTypes.bool,
    children: PropTypes.object.isRequired,
};

export default AccountItem;
