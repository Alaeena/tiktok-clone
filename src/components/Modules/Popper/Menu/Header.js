import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';

const cx = classNames.bind(Styles);
function Header({ title = '', onBack }) {
    return (
        <header className={cx('header')}>
            <button onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <p>{title}</p>
        </header>
    );
}
Header.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func.isRequired,
};
export default Header;
