import { handleActions } from 'redux-actions';
import * as ActionTypes from '../constants/actionTypes';
import { AMOUNT_LABELS, QUOTE_LABELS } from '../constants/labels'

const QUOTE_ITEMS = [
    { name: 'Tequila', value: '1200.00' },
    { name: 'Salt', value: '12.00' },
    { name: 'Lemon', value: '240.00' },
    { name: 'Bartender', value: '345.60' }
];

const VAT_RATE = 0.2;
const addItems = (items) => {
    return items.reduce((currentTotal, currentItem) => currentTotal + Math.round(parseFloat((currentItem.value * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2), 0);
};
const getTotals = (amount, rate) => {
    const vatAmount = amount / (1 + (1 / rate ) );
    return {
        gross: amount.toFixed(2),
        vat: vatAmount.toFixed(2),
        net: (amount - vatAmount).toFixed(2)
    }
};


const initialState = {
    items: QUOTE_ITEMS,
    editMode: {
        itemIndex: -1,
        addingItem: false
    },
    totalLabels : {
        order: [AMOUNT_LABELS.NET, AMOUNT_LABELS.VAT, AMOUNT_LABELS.GROSS],
        net: QUOTE_LABELS.NET_AMOUNT,
        vat: QUOTE_LABELS.VAT,
        gross: QUOTE_LABELS.GROSS_AMOUNT
    },
    totals: {
        net: getTotals(addItems(QUOTE_ITEMS), VAT_RATE).net,
        vat: getTotals(addItems(QUOTE_ITEMS), VAT_RATE).vat,
        gross: getTotals(addItems(QUOTE_ITEMS), VAT_RATE).gross
    },
    vatRate: VAT_RATE
};

export default handleActions({
    [ActionTypes.ADD_QUOTE_ITEM]: (state, action) => {
        const newObject = {
            name: action.payload.name || 'Item',
            value: action.payload.floatvalue || 0.00,
        };
        const newItems = state.items.slice();
        newItems.concat(newObject);
        return Object.assign({}, state, {
            items: newItems,
            totals: getTotals(addItems(newItems), state.vatRate),
        })
    },

    [ActionTypes.SELECT_EDIT_QUOTE_ITEM]: (state, action) => {
        return Object.assign({}, state, {
            editMode: {
                itemIndex: action.payload,
                addingItem: true
            }
        })
    },

    [ActionTypes.SAVE_EDIT_QUOTE_ITEM] : (state, action) => {
        const newObject = {
            name: action.payload.item.name || 'Item',
            value: action.payload.item.floatvalue || 0.00
        };
        state.items.splice(action.payload.index, 1, newObject);
        const newItems = state.items;
        return Object.assign({}, state, {
            items: newItems,
            totals: getTotals(addItems(newItems), state.vatRate),

        })
    },

    [ActionTypes.DELETE_QUOTE_ITEM] : (state, action ) => {
        const newItems = state.items.slice();
        newItems.splice(action.payload, 1);
        return Object.assign({}, state, {
            items: newItems,
            totals: getTotals(addItems(newItems), state.vatRate),

        })
    },

    [ActionTypes.RESET_QUOTE_STATE] : (state) => {
        return Object.assign({}, state, initialState)
    },

    [ActionTypes.CANCEL_QUOTE] : (state) => {
        return Object.assign({}, state, {
            items: [],
            totals: getTotals(addItems([]), state.vatRate)
        })
    },

    [ActionTypes.RESTORE_QUOTE_STATE] : (state, action) => {
        return Object.assign({}, state, {
            items: action.payload.items,
            totals: getTotals(addItems(action.payload.items), state.vatRate),

        })
    }
}, initialState);
