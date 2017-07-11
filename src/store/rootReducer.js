import { combineReducers } from 'redux'
import applicationReducer  from '../reducers/application'
import quoteReducer from '../reducers/quote'

const rootReducer = combineReducers({
    application: applicationReducer,
    quote: quoteReducer
});

export default rootReducer