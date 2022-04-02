import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux'
import { rootReducers } from './redux/rootReducers';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {forbiddenWordsMiddleware} from "./redux/middleware";

import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./redux/sagas";
const saga = createSagaMiddleware()

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk, forbiddenWordsMiddleware, saga)));

saga.run(sagaWatcher)//--

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
