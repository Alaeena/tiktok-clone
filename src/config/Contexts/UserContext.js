import { createContext, useReducer } from 'react';
import axios from 'axios';
import Storage from '../../utils/Storage';
import PropTypes from 'prop-types';

// Reducer Function
const UserContext = createContext();
const initState = Storage.get();
(function () {
    document.body.setAttribute('data-theme', initState.theme);
    if (initState.isLogin === true) {
        axios.defaults.headers.common.Authorization = `Bearer ${initState.token}`;
    }
})();

const wrapper = (type, payload) => ({ type, payload });
function reducer(state, action) {
    const payload = action.payload;
    let newState;

    switch (action.type) {
        case 'setData':
            newState = { ...state, data: payload };
            Storage.set(newState);
            return newState;
        case 'Login':
            newState = {
                theme: Storage.get().theme,
                token: payload.token,
                isLogin: true,
                data: payload.data,
            };
            Storage.set(newState);
            return newState;
        case 'Logout':
            newState = {
                theme: Storage.get().theme,
                isLogin: false,
                token: '',
                data: {},
            };
            Storage.set(newState);
            return newState;
        default:
    }
}
function UserProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);
    const Login = (data) => dispatch(wrapper('Login', data));
    const Logout = () => dispatch({ type: 'Logout' });
    const setData = (data) => dispatch(wrapper('setData', data));

    const action = { Login, Logout, setData };

    return <UserContext.Provider value={{ state, action }}>{children}</UserContext.Provider>;
}
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { UserContext, UserProvider };
