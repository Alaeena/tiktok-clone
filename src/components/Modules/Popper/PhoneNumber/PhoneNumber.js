import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// CSS style
import classNames from 'classnames/bind';
import Styles from './PhoneNumber.module.scss';
import CustomTippy from '@tippyjs/react/headless';

import List from './List';
const cx = classNames.bind(Styles);
function PhoneNumber({ children, visible, setVisible, onClick }) {
    const [value, setValue] = useState('');
    let text = value.replace(/[\][|&;$%@"<>()+,]/g, '');
    const regx = new RegExp(text, 'i');

    const convertText = (...rest) => {
        let initial = [];
        let count = 0;

        for (let number in rest) {
            let variable = rest[number];
            while (variable.search(regx) >= 0) {
                const index = variable.search(regx);
                const end = index + text.length;
                const med = variable.slice(index, end);

                initial.push(variable.slice(0, index));
                initial.push(<span key={count}>{med}</span>);

                variable = variable.slice(end);
                count += 1;
            }
            initial.push(variable);
        }
        return initial;
    };
    const filter = (item) => {
        return item.name.search(regx) >= 0 || item.code.search(regx) >= 0;
    };
    const renderList = () => (
        <ul className={cx('list')}>
            {List.filter((item) => filter(item)).map((item, index) => {
                const { code, name } = item;
                const content = !!text ? convertText(name, code) : name + code;
                return (
                    <li key={index} className={cx('item')} onClick={() => onClick(code)}>
                        {content}
                    </li>
                );
            })}
        </ul>
    );
    return (
        <CustomTippy
            interactive
            appendTo={document.body}
            visible={visible}
            placement="bottom-start"
            onClickOutside={() => setVisible(false)}
            render={() => (
                <div className={cx('container')}>
                    <div className={cx('placeholder')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" />
                    </div>
                    {renderList()}
                </div>
            )}
        >
            {children}
        </CustomTippy>
    );
}
PhoneNumber.propTypes = {
    children: PropTypes.object.isRequired,
};

export default PhoneNumber;
