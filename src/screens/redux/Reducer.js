/*
* Reducer
* Reducer file returns state.
*
*/
import * as ActionTypes from './ActionTypes';

const initialState = {
    isLoading: true,
    errMess: '',
    music: []
}

export const music = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_MUSIC_SUCCESS:
            return { ...state, isLoading: false, errMess: null, music: action.payload };

        case ActionTypes.FETCH_MUSIC_LOADING:
            return { ...state, isLoading: true, errMess: null, music: [] }

        case ActionTypes.FETCH_MUSIC_ERROR:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};