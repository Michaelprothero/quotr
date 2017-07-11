import accountancy from 'accounting'

export const formatWithCurrency = (value) => accountancy.formatMoney(value, '£', 2);
export const getSplitCurrencyValue = (value) => formatWithCurrency(value).split('.');
export const getSplitCurrencyString = (value) => {
    return value.split('.');
};
