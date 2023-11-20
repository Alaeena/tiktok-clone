import { useState, useEffect } from 'react';
import { Exit, Computer, Phone } from '@/components/Icons/regular';
import { DirectionUp } from '@/components/Icons/fill';

import classNames from 'classnames/bind';
import Styles from './BottomModal.module.scss';
const cx = classNames.bind(Styles);

function BottomModal() {
    const [active, setActive] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    function scrollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        function handleScroll() {
            setShowIcon(window.scrollY >= 300);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={cx('container', { showIcon })}>
            <div className={cx('content')}>
                <button onClick={() => setActive(true)} className={cx('app-button', { active })}>
                    Get app
                </button>
                <div className={cx('expandContent', { active })}>
                    <Exit
                        onClick={() => {
                            setActive(false);
                        }}
                        className={cx('exit')}
                    />
                    <div>
                        <div className={cx('expandContent-item')}>
                            <Computer />
                            <span>Get TikTok for desktop</span>
                        </div>
                        <div className={cx('expandContent-item')}>
                            <Phone />
                            <span>Get TikTok App</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className={cx('button-icon')} onClick={scrollTop}>
                <DirectionUp />
            </button>
        </div>
    );
}

export default BottomModal;
