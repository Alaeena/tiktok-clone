import { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import Header from './Header';
import MenuItem from './MenuItem';

import Styles from '../Popper.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);

function Menu({ children, Items }) {
    const [stack, setStack] = useState([{ data: Items }]);
    const current = stack[stack.length - 1];

    useLayoutEffect(() => {
        if (Items !== stack[0]) {
            setStack([{ data: Items }]);
        }
    }, [Items]);
    function renderMenu(attrs) {
        return (
            <div className={cx('container')} {...attrs}>
                {stack.length > 1 && <Header onBack={handleBack} title={current.title} />}
                <ul className={cx('list')}>{render()}</ul>
            </div>
        );
    }
    function render() {
        return current.data.map((item, index) => {
            const hasChildren = !!item.children;
            const func = hasChildren
                ? () => {
                      setStack((prev) => [...prev, item.children]);
                  }
                : item.onClick;
            return <MenuItem key={index} data={item} onClick={func} />;
        });
    }
    function handleBack() {
        setStack((prev) => prev.slice(0, prev.length - 1));
    }
    function resetStack() {
        setStack(stack.slice(0, 1));
    }
    return (
        <Tippy
            interactive
            hideOnClick={false}
            delay={[0, 500]}
            duration={[0, 500]}
            placement="bottom-end"
            render={renderMenu}
            onHide={resetStack}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    Items: PropTypes.array,
};
export default Menu;
