import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { GoogleOAuthProvider } from '@react-oauth/google';

import reducers from './reducers';

import App from './App';
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <GoogleOAuthProvider clientId='478659108347-6fd32reop6gudpui3k6avs7nhm2l5mqf.apps.googleusercontent.com'>
        <Provider store={store}>
            <App />
        </Provider>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);