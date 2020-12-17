import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { App } from './containers/App';

import './styles/main.scss';

let middleware = [thunk];

middleware = window.__REDUX_DEVTOOLS_EXTENSION__
  ? [...middleware, window.__REDUX_DEVTOOLS_EXTENSION__()]
  : middleware;

const store = createStore(
  (state = {}) => state,
  applyMiddleware(...middleware),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
