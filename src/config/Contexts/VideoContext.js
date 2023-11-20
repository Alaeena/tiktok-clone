import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Reducer Function
const VideoContext = createContext();
const initState = {
    muted: true,
    volume: 0,
    playing: undefined,
    disabled: false,
    list: [],
};
const wrapper = (type, payload) => ({ type, payload });
function reducer(state, action) {
    const payload = action.payload;
    switch (action.type) {
        case 'setVolume':
            // eslint-disable-next-line eqeqeq
            if (payload == 0) {
                return { ...state, volume: 0, muted: true };
            } else {
                return { ...state, volume: payload, muted: false };
            }
        case 'toggle':
            if (state.volume === 0) {
                state.volume = 20;
            }
            return { ...state, muted: !state.muted };
        case 'setPlaying':
            if (payload === state.playing) {
                return state;
            }
            return { ...state, playing: payload };
        case 'setList':
            const list = typeof payload === 'function' ? payload(state.list) : payload;
            return { ...state, list };
        case 'setDisabled':
            return { ...state, disabled: payload };
        default:
    }
}
function VideoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    const toggle = () => dispatch(wrapper('toggle'));
    const setDisabled = (value) => dispatch(wrapper('setDisabled', value));
    const setVolume = (value) => dispatch(wrapper('setVolume', value));
    const setPlaying = (id) => dispatch(wrapper('setPlaying', id));
    const setList = (list) => dispatch(wrapper('setList', list));

    return (
        <VideoContext.Provider value={{ ...state, setDisabled, toggle, setPlaying, setVolume, setList }}>
            {children}
        </VideoContext.Provider>
    );
}
VideoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { VideoContext, VideoProvider };
