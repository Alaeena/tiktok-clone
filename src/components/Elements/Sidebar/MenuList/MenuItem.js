import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(Styles);

function MenuItem({ to, icon, active, title }) {
    return (
        <NavLink to={to} className={(nav) => cx('item', { active: nav.isActive })}>
            {icon}
            {active}
            <span>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.node.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
