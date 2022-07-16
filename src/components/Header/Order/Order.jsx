import React from 'react';
import { FaTrash } from 'react-icons/fa';
import classes from './Order.module.css';

// к-та конкретного item в корзині
const Order = (props) => {

    let delOrder = () => {
        let id = props.item.id;
        // метод видалення товару з корзини dispatch(action); + в метод передається id
        props.dispatch({ type: 'DELETE-ORDER', id: id })
    }

    return (
        <div className={classes.item}>
            <img src={"./img/" + props.item.img} />
            <h2>{props.item.title}</h2>
            <b>{props.item.price} грн.</b>
            {/* іконка для видалення товару з корзини */}
            <FaTrash className={classes.delete_icon} onClick={delOrder} />
        </div>
    )
}

export default Order;
