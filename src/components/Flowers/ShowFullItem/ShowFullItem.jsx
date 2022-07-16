import React, { Component } from 'react';
import classes from './ShowFullItem.module.css';

// к-та для відображення модального вікна вибраного товару
const ShowFullItem = (props) => {
    let addToOrder = () => {
        let item = props.item;
        // метод додавання товару в корзину dispatch(action); + в метод передається item
        props.dispatch({ type: 'ADD-TO-ORDER', item: item });
    }

    return (
        <div className={classes.full_item}>
            <div>
                {/* img повинні знаходитися в папці publik/img */}
                <img src={"./img/" + props.item.img} />
                {/* onShowItem - закрити модальне вікно */}
                <div className={classes.closeModWind} onClick={() => props.onShowItem(props.item)}>X</div>
                <h2>{props.item.title}</h2>
                <p>{props.item.desc}</p>
                <b>{props.item.price} грн.</b>
                {/* при onClick елемент item буде додаватися в корзину (до масива oders в App) */}
                <div className={classes.add_to_cart} onClick={addToOrder}>+</div>
            </div>
        </div>
    )
}

export default ShowFullItem;