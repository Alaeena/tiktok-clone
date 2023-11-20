import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Images from '@/components/Images/Image';

// CSS style
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Styles from './Accounts.module.scss';
const cx = classNames.bind(Styles);

function Accounts({ children }) {
    return (
        <>
            <div>Accounts</div>
            {children.map(({ id, full_name, nickname, tick, avatar }) => (
                <Link to={`/profile/${nickname}`} className={cx('item')} key={id}>
                    <Images src={avatar} alt={full_name}></Images>
                    <div>
                        <h4>
                            {full_name} {tick && <FontAwesomeIcon icon={faCircleCheck} />}
                        </h4>
                        <p>{nickname}</p>
                    </div>
                </Link>
            ))}
        </>
    );
}
Accounts.propTypes = {
    children: PropTypes.array.isRequired,
};

export default Accounts;
