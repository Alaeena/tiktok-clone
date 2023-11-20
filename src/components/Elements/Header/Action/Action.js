import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faUpload, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

// Hook and Modules
import { Auth } from '@/components/Modules';
import { useAuth } from '@/hooks';
import { useState } from 'react';

// Custom Tippy
import { Menu, Button } from '@/components/Modules';
import { DefaultMenu, UserMenu } from './MenuPreset';
import Images from '@/components/Images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// CSS style
import classNames from 'classnames/bind';
import styles from './Action.module.scss';
const cx = classNames.bind(styles);

function ACtion() {
    const [visible, setVisible] = useState(false);
    const { state } = useAuth();

    return (
        <div className={cx('action')}>
            <Button style={['blackOutline']} link="/upload" leftIcon={<FontAwesomeIcon icon={faUpload} />}>
                Upload
            </Button>
            {state.isLogin ? (
                <>
                    <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                        <button className={cx('menu-icon')}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <span>12</span>
                        </button>
                    </Tippy>
                    <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                        <button className={cx('menu-icon')}>
                            <FontAwesomeIcon icon={faMessage} />
                        </button>
                    </Tippy>
                    <Menu Items={UserMenu}>
                        <Images
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c1eee8a692b34023a2606a2ede714464~c5_300x300.webp?x-expires=1688371200&x-signature=8KZc2mCA4x0Qj0PSiM2NkqIy5oE%3D"
                            className={cx('menu-img')}
                            alt="user"
                        ></Images>
                    </Menu>
                </>
            ) : (
                <>
                    <Button style={['primary']} onClick={() => setVisible(true)}>
                        Login
                    </Button>
                    <Auth visible={visible} setVisible={() => setVisible(false)} type="login" />
                    <Menu Items={DefaultMenu}>
                        <button className={cx('menu')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </>
            )}
        </div>
    );
}

export default ACtion;
