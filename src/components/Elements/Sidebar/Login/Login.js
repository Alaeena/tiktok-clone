import { useState } from 'react';
import { Button, Auth } from '@/components/Modules';

import classNames from 'classnames/bind';
import Styles from './Login.module.scss';
const cx = classNames.bind(Styles);

function Login() {
    const [visible, setVisible] = useState(false);
    return (
        <div className={cx('container')}>
            <span className={cx('span')}>Log in to follow creators, like videos, and view comments.</span>
            <Button style={['outline', 'sizeL', cx('button')]} onClick={() => setVisible(true)}>
                Log in
            </Button>
            <Auth visible={visible} setVisible={() => setVisible(false)} type={'login'} />
        </div>
    );
}

export default Login;
