import React from 'react';
import { FaTrash } from 'react-icons/fa';
import classes from './Order.module.css';

// к-та конкретного item в корзині
const Order = (props) => {

    // ф-ція видалення товару з корзини
    let onDelOrder = () => {
        let id = props.item.id;
        // callback з HeaderContainer - ф-ція (через dispatch(action)) - видалення товару з корзини; + d callback передається id
        props.delOrder(id);
    }

    return (
        <div className={classes.item}>
            <img src={"./img/" + props.item.img} />
            <h2>{props.item.title}</h2>
            <b>{props.item.price} грн.</b>
            {/* іконка для видалення товару з корзини */}
            <FaTrash className={classes.delete_icon} onClick={onDelOrder} />
        </div>
    )
}

export default Order;
