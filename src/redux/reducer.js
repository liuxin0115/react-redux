import {combineReducers} from 'redux';
import {
    ADD,
    REDUCE
} from './avtion-types'

function count (state = 0, action) {
    console.log(state, action);
    switch (action.type) {
        case ADD:
            return state + action.data;
        case REDUCE:
            return state - action.data;
        default:
            return state;
    }
}

export default combineReducers ({
    count
})