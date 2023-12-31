import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from '../Layout.module.scss';

import { Sidebar, Header } from '@/components/Elements';
const cx = classNames.bind(Styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
