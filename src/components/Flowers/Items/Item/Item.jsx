import React from 'react';
import classes from './Item.module.css';

// к-та конкретного товару
const Item = (props) => {

    // ф-ція додавання товару в корзину
    let onAddToOrder = () => {
        let item = props.item;
        // callback з FlowersContainer - ф-ція (через dispatch(action)) - додавання товару в корзину; + в callback передається item
        props.addToOrder(item);
    }

    // ф-ція показати товар у модальному вікні
    let onShowItem = () => {
        let item = props.item;
        // callback з FlowersContainer - ф-ція (через dispatch(action)) - показати товар у модальному вікні; + в callback передається item
        props.showItem(item);
    }

    return (
        <div className={classes.item}>
            {/* img повинні знаходитися в папці publik/img */}
            <img src={"./img/" + props.item.img} onClick={onShowItem} />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price} грн.</b>
            {/* при onClick елемент item буде додаватися в корзину (до масива oders в App) */}
            <div className={classes.add_to_cart} onClick={onAddToOrder}>+</div>
        </div>
    )
}

export default Item;