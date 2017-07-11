import { createAction } from 'redux-actions'
import * as ActionTypes from '../constants/actionTypes'

const RESTORE_QUOTE_STATE = createAction(ActionTypes.RESET_QUOTE_STATE);
const ACTION_QUOTE_ITEM = createAction(ActionTypes.ADD_QUOTE_ITEM);
const ACTION_SELECT_EDIT_ITEM = createAction(ActionTypes.SELECT_EDIT_QUOTE_ITEM);
const SAVE_EDIT_QUOTE_ITEM = createAction(ActionTypes.SAVE_EDIT_QUOTE_ITEM);
const ACTION_RESET_QUOTE = createAction(ActionTypes.RESET_QUOTE_STATE);
const ACTION_DELETE_QUOTE_ITEM = createAction(ActionTypes.DELETE_QUOTE_ITEM);

export const restoreSavedQuote = (items) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch(RESTORE_QUOTE_STATE(items))
            resolve()

        })
    }
};

export const addQuoteItem = (item) => {
    return dispatch => {
        dispatch(ACTION_QUOTE_ITEM(item))
    }
};

export const selectEditItem = (index) => {
    return dispatch => {
        dispatch(ACTION_SELECT_EDIT_ITEM(index))
    }
};

export const saveEditItem = (payload) => {
    return dispatch => {
        dispatch(SAVE_EDIT_QUOTE_ITEM(payload))
    }
};

export const deleteEditedItem = (index) => {
    return dispatch => {
        dispatch(ACTION_DELETE_QUOTE_ITEM(index))
    }
};

export const discardChanges = () => {
    return dispatch => {
        dispatch(ACTION_RESET_QUOTE())
    }
};