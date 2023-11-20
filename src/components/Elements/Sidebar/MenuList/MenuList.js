import * as regular from '@/components/Icons/regular';
import * as fill from '@/components/Icons/fill';
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';

import { routesConfig } from '@/config';
import MenuItem from './MenuItem';
const cx = classNames.bind(Styles);

function MenuList() {
    return (
        <nav className={cx('list')}>
            <MenuItem to={routesConfig.root} icon={<regular.Home />} active={<fill.Home />} title="For you" />
            <MenuItem
                to={routesConfig.following}
                icon={<regular.UserGroup />}
                active={<fill.UserGroup />}
                title="Following"
            />
            <MenuItem to={routesConfig.explore} icon={<regular.Compass />} active={<fill.Compass />} title="Explore" />
            <MenuItem to={routesConfig.live} icon={<regular.Camera />} active={<fill.Camera />} title="Live" />
        </nav>
    );
}

export default MenuList;
