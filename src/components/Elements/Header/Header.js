import { Link } from 'react-router-dom';
import Search from './Search';
import Action from './Action';
import images from '@/assets/img';

// Styles && config
import { routesConfig } from '@/config';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('content')}>
            <div className={cx('header-logo')}>
                <Link to={routesConfig.root}>
                    <img className={cx('default-logo')} src={images.logo} alt="logo" />
                    <img className={cx('dark-logo')} src={images.darkLogo} alt="logo" />
                </Link>
            </div>
            <Search />
            <Action />
        </div>
    );
}

export default Header;
