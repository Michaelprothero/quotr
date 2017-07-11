import { handleActions } from 'redux-actions';
import * as ActionTypes from '../constants/actionTypes';

const initialState = {
    editMode: false,
    savedQuote: null

};

export default handleActions({
    [ActionTypes.CHANGE_MODE]: (state) => {
        return Object.assign({}, state, {
            editMode: !state.editMode
        })
    },

    [ActionTypes.SET_SAVED_QUOTE] : (state, action) => {
        return Object.assign({}, state, {
            editMode: false,
            savedQuote: {
                items: action.payload
            }
        })
    }
}, initialState);

