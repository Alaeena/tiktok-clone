export default function logger(reducer) {
    return (state, action) => {
        console.group(action.type);
        console.log('previous state', state);
        console.log('variable', action);
        const newState = reducer(state, action);
        console.log('new state', newState);
        console.groupEnd();
        return newState;
    };
}
