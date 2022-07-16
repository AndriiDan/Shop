import React from 'react';
import { addToOrderActionCreator } from '../../../../redux/state';
import classes from './Item.module.css';

// к-та конкретного товару
const Item = (props) => {

    let addToOrder = () => {
        let item = props.item;
        // метод додавання товару в корзину покупок dispatch(addToOrderActionCreator(item)); + в метод передається item
        props.dispatch(addToOrderActionCreator(item));
    }

    return (
        <div className={classes.item}>
            {/* img повинні знаходитися в папці publik/img */}
            {/* метод dispatch(type: 'ON-SHOW-ITEM') показати товар у модальному вікні; + в метод передається item */}
            <img src={"./img/" + props.item.img} onClick={() => props.dispatch({ type: 'ON-SHOW-ITEM', item: props.item })} />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price} грн.</b>
            {/* при onClick елемент item буде додаватися в корзину (до масива oders в App) */}
            <div className={classes.add_to_cart} onClick={addToOrder}>+</div>
        </div>
    )
}

export default Item;