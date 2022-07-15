import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";

// ф-ція для перемалювання всьго дерева
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            {/* <App state={state} dispatch={store.dispatch.bind(store)} /> */}

            <App state={state} dispatch={store.dispatch.bind(store)} onAdd={store.addToOrder.bind(store)} onDelete={store.deleteOrder.bind(store)}
                chooseCategory={store.chooseCategory.bind(store)} onShowItem={store.onShowItem.bind(store)} />


        </React.StrictMode>,
        document.getElementById('root')
    );
}

// відмалювати все дерево
rerenderEntireTree(store.getState());

// прокидуємо rerenderEntireTree в state.js в subscribe
store.subscribe(rerenderEntireTree);