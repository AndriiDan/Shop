import React, { Component } from 'react';
import classes from './Item.module.css';

// к-та конкретного товару
const Item = (props) => {

    let addToOrder = () => {
        let item = props.item;
        props.onAdd(item);
    }

    return (
        <div className={classes.item}>
            {/* img повинні знаходитися в папці publik/img */}
            <img src={"./img/" + props.item.img} onClick={() => props.onShowItem(props.item)} />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price} грн.</b>
            {/* при onClick елемент item буде додаватися в корзину (до масива oders в App) */}
            <div className={classes.add_to_cart} onClick={addToOrder}>+</div>
        </div>
    )
}

export default Item;