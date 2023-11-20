import PropTypes from 'prop-types';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import { Exit } from '@/components/Icons/regular';
import Content from './Content';
import Preset from './AuthPreset';

// CSS Style
import classNames from 'classnames/bind';
import ModalStyle from '../Modal.module.scss';
import Styles from './Auth.module.scss';
const cx = classNames.bind(Styles);

let modalRoot = document.getElementById('modal');
if (!modalRoot) {
    const modalRootElement = document.createElement('div');
    modalRootElement.id = 'modal';
    document.body.appendChild(modalRootElement);
    modalRoot = modalRootElement;
}

function Auth({ visible, setVisible, type,from }) {
    const [state, setState] = useState(type);

    const handleState = () => {
        setState((prev) => (prev === 'login' ? 'register' : 'login'));
    };
    const handleClose = () => {
        setState(type);
        setVisible();
    };
    if (!visible) {
        return null;
    }
    const list = Preset[state];
    const { footer, link, content, limit } = list;
    return createPortal(
        <div className={ModalStyle.overlay} onClick={handleClose}>
            <div className={cx('container')} onClick={(e) => e.stopPropagation()}>
                <Content data={content} limit={limit} />
                <div className={cx('footer')}>
                    <div>{footer}</div>
                    <span onClick={handleState}>{link}</span>
                </div>
                <button className={cx('button')} onClick={handleClose}>
                    <Exit />
                </button>
            </div>
        </div>,
        modalRoot,
    );
}
Auth.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};
export default Auth;
