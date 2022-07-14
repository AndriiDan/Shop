import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import classes from './Order.module.css';

// export class Order extends Component {
//     render() {
//         return (
//             <div className={classes.item}>
//                 <img src={"./img/" + this.props.item.img} />
//                 <h2>{this.props.item.title}</h2>
//                 <b>{this.props.item.price} грн.</b>
//                 {/* іконка для видалення товару з корзини */}
//                 <FaTrash className={classes.delete_icon} onClick={() => {
//                     this.props.onDelete(this.props.item.id)
//                 }} />
//             </div>
//         )
//     }
// }

// к-та конкретного item в корзині
const Order = (props) => {
    return (
        <div className={classes.item}>
            <img src={"./img/" + props.item.img} />
            <h2>{props.item.title}</h2>
            <b>{props.item.price} грн.</b>
        </div>
    )
}

export default Order;
