import { LogoutUser } from '@/services/authService';
import { useAuth } from '@/hooks';

import { createPortal } from 'react-dom';
import { Button } from '@/components/Modules';

// CSS style
import classNames from 'classnames/bind';
import Styles from './Logout.module.scss';
import ModalStyle from '../Modal.module.scss';
const cx = classNames.bind(Styles);

let modalRoot = document.getElementById('modal');
if (!modalRoot) {
    const modalRootElement = document.createElement('div');
    modalRootElement.id = 'modal';
    document.body.appendChild(modalRootElement);
    modalRoot = modalRootElement;
}
function Logout({ visible, setVisible }) {
    const { action } = useAuth();
    if (!visible) {
        return;
    }
    const handleClick = () => {
        LogoutUser();
        setVisible(false);
        action.Logout();
    };
    return createPortal(
        <div className={ModalStyle.overlay} onClick={setVisible}>
            <div className={cx('container')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('header')}>Are your sure you want to log out?</div>
                <div className={cx('content')}>
                    <Button onClick={setVisible} style={['blackOutline']}>
                        Cancel
                    </Button>
                    <Button onClick={handleClick} style={['outline']}>
                        Log out
                    </Button>
                </div>
            </div>
        </div>,
        modalRoot,
    );
}

export default Logout;
