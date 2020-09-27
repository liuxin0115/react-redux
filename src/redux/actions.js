import {
    ADD,
    REDUCE
} from './avtion-types';

export const add = number => ({type: ADD, data: number})

export const reduce = number => ({type: REDUCE, data: number})

export const addAsync = number => {
    return dispatch => {
        setTimeout(() => {
            dispatch(add(number))
        },1000)
    }
}