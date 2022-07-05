import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addNewReview } from './redux/state';

// ф-ція для перемалювання всьго дерева
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewReview={addNewReview} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
