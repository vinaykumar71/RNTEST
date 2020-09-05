/*
* Action Creators
* File contain all the action logic.
*
*/

import * as ActionTypes from './ActionTypes';
import Apis from '_services/Apis';

// GET
export const fetchMusic = () => (dispatch) => {
    dispatch(musicLoading());
    Apis.fetch_music()
        .then((response) => {
            dispatch(musicSuccess(response.data.results));
        })
        .then(handleErrors)
        .catch((error) => {
            dispatch(musicFailed(error));
        })
};

// Handle HTTP errors
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const musicLoading = () => ({
    type: ActionTypes.FETCH_MUSIC_LOADING
});

export const musicSuccess = (music) => ({
    type: ActionTypes.FETCH_MUSIC_SUCCESS,
    payload: music
});

export const musicFailed = (errmess) => ({
    type: ActionTypes.FETCH_MUSIC_ERROR,
    payload: errmess
});



