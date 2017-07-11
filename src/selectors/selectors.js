import { createSelector } from 'reselect'

/**
 * Reducer State Selectors
 * @param state
 */
const applicationState = state => state.application;
const quoteState = state => state.quote;

/**
 * Application State Property Selectors
 */
export const editModeSelector = createSelector(applicationState, application => application.editMode);
export const savedQuoteSelector = createSelector(applicationState, application => application.savedQuote);

/**
 * Quote State Property Selectors
 */
export const getQuoteItems = createSelector(quoteState, quote => quote.items);
export const getQuoteLabels = createSelector(quoteState, quote => quote.totalLabels);
export const getSelectedItem = createSelector(quoteState, quote => quote.editMode.itemIndex);
export const getQuoteTotals = createSelector(quoteState, quote => quote.totals);