import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';

// let reviewsData = [
//   { id: 1, review: "Дякую, молоці!", likesCount: 5 },
//   { id: 2, review: "Дуже гарні квіти.", likesCount: 10 },
//   { id: 3, review: "Замовлення доставили швидко. Дякую.", likesCount: 7 }
// ]

ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);
