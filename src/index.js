import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import App from './App';

console.log('Before Dispatch : ', store.getState());

store.dispatch({
  type: 'INCREMENT',
  payload: {
    value: 1
  }
});

// cosnt store = {
  // listneres = []
//   getState: () => (),
//   dispatch: () => (),
//   subscribe: () => ()
// }

console.log('After Dispatch : ', store.getState());

ReactDOM.render(
  // <div />,
  <App
    counterValue = {store.getState()}
    store = { store }
  />,
  document.getElementById('root')
);
