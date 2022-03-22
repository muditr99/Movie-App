import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';


const store = createStore(movies);// createStore calls movies reducer to get the initial state
console.log('STORE', store);
console.log('BEFORE STATE', store.getState());

store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{ name: 'Superman' }]
})

console.log('AFTER STATE', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
;
