import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addNewReview, subscribe, updateNewReviewText } from "./redux/state";

// ф-ція для перемалювання всьго дерева
let callSubscriber = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewReview={addNewReview} updateNewReviewText={updateNewReviewText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// відмалювати все дерево
callSubscriber(state);

// прокидуємо callSubscriber в state.js
subscribe(callSubscriber);