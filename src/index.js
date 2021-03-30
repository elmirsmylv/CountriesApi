import React from "react";
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';

import App from "./App";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers";
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));


const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>

    </React.StrictMode>,
    rootElement
);
