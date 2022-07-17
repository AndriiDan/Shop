import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";

// ф-ція для перемалювання всьго дерева
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// відмалювати все дерево
rerenderEntireTree(store.getState());

// оновлення сторінок після зміни state; повідомити підписників
store.subscribe(() => {
    // state після зміни (reducer)
    let state = store.getState();
    // перемалювати все дерево з оновленими даними state (redux сам не оновлює, тільки повідомляє підписників, що state змінився)
    rerenderEntireTree(state);
});