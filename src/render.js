import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addNewReview, updateNewReviewText } from './redux/state';

// ф-ція для перемалювання всьго дерева
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewReview={addNewReview} updateNewReviewText={updateNewReviewText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
