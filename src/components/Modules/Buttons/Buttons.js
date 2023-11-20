import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Styles from './Buttons.module.scss';

const cx = classNames.bind(Styles);

function Button({ link, href, children, onClick, style = [], leftIcon, rightIcon }) {
    let Comp = 'button';
    const classes = cx('wrapper', ...style);
    const props = {
        onClick,
    };
    if (style.includes('disabled')) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (link) {
        Comp = Link;
        props.to = link;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon}
            <span>{children}</span>
            {rightIcon}
        </Comp>
    );
}

Button.propTypes = {
    link: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.array,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Button;
