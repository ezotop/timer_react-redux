const initialState = {
    startTime: 0,
    time: 0,
    interval: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_TIMER':
            console.log(`Started interval: ${action.interval}`)
            return {
                ...state,
                startTime: action.startTime,
                interval: action.interval
            };
        case 'STOP_TIMER':
            clearInterval(state.interval)
            console.log(`Stopped interval: ${action.interval}`)
            return {
                ...state,
                interval: action.interval
            };
        case 'UPDATE_TIMER':
            // console.log(`Updated interval: ${state.interval}`);
            return {
                ...state,
                // time: Math.floor(state.time + (action.timeNow- state.startTime)),
                time: state.time + 1,
                startTime: action.timeNow
            };
        case 'RESET_TIMER':
            return {
                ...state,
                time: 0
            };
        case 'WAIT_TIMER':
            return {
                ...state
            }
        default:
            return state;
    }
};

export default reducer;