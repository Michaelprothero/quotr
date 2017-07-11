import { createAction } from 'redux-actions'
import * as ActionTypes from '../constants/actionTypes'

const ACTION_TOGGLEMODE = createAction(ActionTypes.CHANGE_MODE);
const ACTION_SAVE_QUOTE = createAction(ActionTypes.SET_SAVED_QUOTE);

export const toggleEditMode = () => {
    return dispatch => {
        dispatch(ACTION_TOGGLEMODE())
    }
};

export const saveQuote = (quote) => {
    return dispatch => {
        dispatch(ACTION_SAVE_QUOTE(quote))
    }
};