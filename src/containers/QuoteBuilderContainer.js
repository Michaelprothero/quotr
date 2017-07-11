import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { HeaderBar } from '../components/index'
import { QuoteBuilder } from '../pages/index'
import { Container, ModeButton }from '../pages/QuoteBuilder/style'
import { QUOTE_LABELS} from '../constants/labels'

import { savedQuoteSelector, getQuoteItems, getSelectedItem, getQuoteLabels, getQuoteTotals } from '../selectors/selectors'
import * as ApplicationActions from '../actions/application'
import * as QuoteActions from '../actions/quote'

class QuoteBuilderContainer extends React.Component {

    getHeaderComponent() {
        const { editMode, toggleEditMode, restoreSavedQuote } = this.props;
        return React.createElement(HeaderBar, {
                leftComponent: {
                    text: editMode ? QUOTE_LABELS.UPDATE : QUOTE_LABELS.DETAILS
                },
                rightComponent: {
                    text: <ModeButton
                        cancelStyle={editMode}>{editMode ? QUOTE_LABELS.CANCEL : QUOTE_LABELS.AMEND}</ModeButton>,
                    action: (savedQuote) => restoreSavedQuote(savedQuote).then(() => {
                        toggleEditMode()
                    })
                }
            }
        )
    }

    render() {
        return (
            <Container>
                {this.getHeaderComponent()}
                <QuoteBuilder{...this.props}/>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        savedQuote: savedQuoteSelector(state),
        quoteItems: getQuoteItems(state),
        selectedItem: getSelectedItem(state),
        totalLabels: getQuoteLabels(state),
        totals: getQuoteTotals(state)
    }
};

export default connect(mapStateToProps, dispatch => bindActionCreators({...ApplicationActions, ...QuoteActions }, dispatch))(QuoteBuilderContainer)
