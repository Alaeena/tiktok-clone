import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import { AccountPreview, SubscribeButton } from '@/components/Modules';
import { Link } from 'react-router-dom';
import { Music } from '@/components/Icons/regular';

import classNames from 'classnames/bind';
import Styles from './InfoContainer.module.scss';
const cx = classNames.bind(Styles);

function InfoContainer({ data }) {
    const [overflow, setOverflow] = useState(false);
    const [toggle, setToggle] = useState(false);

    const { description, music } = data;
    const { first_name, last_name, nickname, id } = data.user;
    const onRefChange = useCallback((node) => {
        const desc_height = 84;
        if (node && node.offsetHeight > desc_height) {
            setOverflow(true);
        }
    }, []);

    return (
        <div className={cx('content')}>
            <SubscribeButton id={id} allowUnsubscribe={true} style={['outline', 'sizeM', cx('follow-button')]} />
            <AccountPreview data={data.user}>
                <Link className={cx('header')}>
                    <h3>{nickname}</h3>
                    <h4>{first_name + ' ' + last_name}</h4>
                </Link>
            </AccountPreview>
            <div className={cx('desc', { toggle })}>
                <div ref={onRefChange} className={cx('desc-content')}>
                    {description}
                    <span>#keyboard</span>
                    <span>#ghuyreview</span>
                    <span>#banphimco</span>
                    <span>#unboxing</span>
                    <span>#setupgaming</span>
                </div>
                {overflow && (
                    <>
                        <button onClick={() => setToggle(true)} className={cx('show-button')}>
                            more
                        </button>
                        <button onClick={() => setToggle(false)} className={cx('less-button')}>
                            less
                        </button>
                    </>
                )}
            </div>
            {music && (
                <div className={cx('tagWrapper')}>
                    <Music />
                    <span>{music}</span>
                </div>
            )}
        </div>
    );
}
InfoContainer.propTypes = {
    data: PropTypes.object.isRequired,
};

export default InfoContainer;
