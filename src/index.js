import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addNewReview } from './redux/state';

console.log(addNewReview)

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addNewReview={addNewReview} />
  </React.StrictMode>,
  document.getElementById('root')
);
