import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";

// ф-ція для перемалювання всьго дерева
let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// відмалювати все дерево
rerenderEntireTree();

// оновлення сторінок після зміни state; повідомити підписників
store.subscribe(() => {
    // перемалювати все дерево з оновленими даними state (redux сам не оновлює, тільки повідомляє підписників, що state змінився)
    rerenderEntireTree();
});