import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { Provider } from 'react-redux';
import { configStore } from './store';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);

