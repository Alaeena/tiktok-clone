import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { CustomItem, SwitchButton } from './Element';
import Styles from './Menu.module.scss';
const cx = classNames.bind(Styles);

function MenuItem({ data, onClick }) {
    const { icon, title, to, func, wrapper, style = [] } = data;
    const classes = cx('item', ...style);
    const props = { onClick };

    let Comp = 'li';
    if (to) {
        Comp = Link;
        props.to = to;
    }
    if (wrapper) {
        return <CustomItem title={title} icon={icon} wrapper={wrapper} style={style} />;
    }
    return (
        <Comp className={classes} {...props}>
            <div>
                {icon}
                <span>{title}</span>
            </div>
            {func && <SwitchButton func={func} />}
        </Comp>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
