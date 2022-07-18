import React from 'react';
import { deleteOrderActionCreator } from '../../redux/flowers-reducer';
import Header from './Header';

const HeaderContainer = (props) => {

    // callback для компоненти Order - видалити товар з корзини
    let deleteOrder = (id) => {
        // actionCreator - метод видалення товару з корзини dispatch(deleteOrderActionCreator(id)); + в метод передається id
        let action = deleteOrderActionCreator(id);
        // виконання ф-ції видалення товару з корзини
        props.store.dispatch(action);
    }

    return (
        <Header
            orders={props.store.getState().flowersPage.orders}
            delOrder={deleteOrder} />
    )
}

export default HeaderContainer;