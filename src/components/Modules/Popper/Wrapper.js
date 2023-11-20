import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import Styles from './Popper.module.scss';
import { Accounts } from '@/components/Modules/';

const cx = classNames.bind(Styles);

function Wrapper({ children, value = '' }) {
    return (
        <ul className={cx('list', 'shadow')}>
            <div>
                <p>You may like</p>
            </div>
            <li className={cx('item')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Learning Javascript
            </li>
            <li className={cx('item')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Learning HTML, CSS
            </li>
            <Accounts>{children}</Accounts>
            <li className={cx('item')}>
                <p>{`View all result for "${value}"`}</p>
            </li>
        </ul>
    );
}
Wrapper.propTypes = {
    children: PropTypes.array.isRequired,
    value: PropTypes.string,
};

export default Wrapper;
