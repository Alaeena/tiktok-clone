import { useReducer, useLayoutEffect } from 'react';
import { MoveLeft, MoveDown } from '@/components/Icons/regular';
import { License } from '.';

// CSS STYLE
import classNames from 'classnames/bind';
import Styles from './Content.module.scss';
const cx = classNames.bind(Styles);

// CONSTANT
const SET_LIMIT = 'SetLimit';
const SET_STATE = 'SetState';
const SET_STACK = 'SetStack';
const RESET_STACK = 'Reset';

const wrap = (type, payload) => ({ type, payload });
const reducer = (state, action) => {
    const payload = action.payload;
    switch (action.type) {
        case SET_LIMIT:
            return { ...state, limit: payload };
        case SET_STATE:
            return { limit: payload.limit, stack: [payload.data] };
        case SET_STACK:
            return { limit: state.limit, stack: [...state.stack, payload] };
        case RESET_STACK:
            return { limit: state.limit, stack: state.stack.slice(0, 1) };
        default:
    }
};

function AuthContent({ data, limit }) {
    const [state, dispatch] = useReducer(reducer, { stack: [data], limit });
    const stack = state.stack;
    const show = state.limit;
    const length = stack.length - 1;
    const { title, content, license } = stack[length];

    useLayoutEffect(() => {
        if (stack[length] !== data) {
            dispatch(wrap(SET_STATE, { data, limit }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    const render = () => {
        if (Array.isArray(content)) {
            return content.slice(0, show).map((item, index) => {
                const Icon = item.icon;
                const props = {};
                if (item.to) {
                    props.onClick = () => dispatch(wrap(SET_STACK, item.to));
                } else {
                    props.className = cx('content-item', 'disabled');
                }
                return (
                    <button key={index} className={cx('content-item')} {...props}>
                        <Icon />
                        <span>{item.title}</span>
                    </button>
                );
            });
        } else {
            const Component = content.component;
            const props = {};
            if (content.to) {
                props.onClick = () => dispatch(wrap(SET_STACK, content.to));
            }
            return <Component {...props} />;
        }
    };
    return (
        <>
            <div className={cx('content')}>
                <h1 className={cx('content-header')}>{title}</h1>
                {render()}
                {length === 0 && content.length !== show && (
                    <div onClick={() => dispatch(wrap(SET_LIMIT, content.length))}>
                        <MoveDown />
                    </div>
                )}
            </div>
            {license && <License />}
            {length > 0 && (
                <button className={cx('left-button')} onClick={() => dispatch(wrap(RESET_STACK))}>
                    <MoveLeft />
                </button>
            )}
        </>
    );
}

export default AuthContent;
