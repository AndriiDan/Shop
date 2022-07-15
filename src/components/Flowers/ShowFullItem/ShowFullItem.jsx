import React, { Component } from 'react';
import classes from './ShowFullItem.module.css';

// к-та для відображення модального вікна вибраної квітки
// export class ShowFullItem extends Component {
//     render() {
//         return (
//             <div className={classes.full_item}>
//                 <div>
//                     {/* img повинні знаходитися в папці publik/img */}
//                     <img src={"./img/" + this.props.item.img} />
//                     <div className={classes.closeModWind} onClick={() => this.props.onShowItem(this.props.item)}>X</div>
//                     <h2>{this.props.item.title}</h2>
//                     <p>{this.props.item.desc}</p>
//                     <b>{this.props.item.price} грн.</b>
//                     {/* при onClick елемент item буде додаватися в корзину (до масива oders в App) */}
//                     <div className={classes.add_to_cart} onClick={() => this.props.onAdd(this.props.item)}>+</div>
//                 </div>
//             </div>
//         )
//     }
// }

// к-та для відображення модального вікна вибраного товару
const ShowFullItem = (props) => {
    let addToOrder = () => {
        let item = props.item;
        props.onAdd(item);
    }

    return (
        <div className={classes.full_item}>
            <div>
                {/* img повинні знаходитися в папці publik/img */}
                <img src={"./img/" + props.item.img} onClick={() => props.onShowItem(props.item)} />
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