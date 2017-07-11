import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import AppLayout from '../layouts/AppLayout/AppLayout'
import QuoteBuilderContainer from '../containers/QuoteBuilderContainer'

import { editModeSelector } from '../selectors/selectors'
import * as ApplicationActions from '../actions/application'


class AppContainer extends React.Component {

    render() {
        return (
            <AppLayout>
                <QuoteBuilderContainer {...this.props}/>
            </AppLayout>
        )
    }
}

const mapStateToProps = state => {
    return {
        editMode: editModeSelector(state)
    }
};

export default connect(mapStateToProps, dispatch => bindActionCreators(ApplicationActions, dispatch))(AppContainer)
