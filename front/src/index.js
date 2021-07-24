import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';

import App from './App';
// reducers
import {createStore} from 'redux'
import Reducers from './Reducers' // criar arquivo Reducers.js

// criar os reducers
const store = createStore(Reducers)



ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


