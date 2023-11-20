import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from '../Layout.module.scss';

import { Header } from '@/components/Elements';
const cx = classNames.bind(Styles);

function OnlyHeader({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container-content')}>{children}</div>
        </div>
    );
}
OnlyHeader.propTypes = {
    children: PropTypes.node.isRequired,
};
export default OnlyHeader;
