import React, { Component } from 'react';
import { Provider }  from 'react-redux'
import AppContainer from '../containers/AppContainer'

import createStore from '../store/store'
const store = createStore();


class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <AppContainer />
            </Provider>

        );
    }
}

export default App;
