import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";

// ф-ція для перемалювання всьго дерева
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewReview={store.addNewReview.bind(store)} updateNewReviewText={store.updateNewReviewText.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// відмалювати все дерево
rerenderEntireTree(store.getState());

// прокидуємо rerenderEntireTree в state.js в subscribe
store.subscribe(rerenderEntireTree);