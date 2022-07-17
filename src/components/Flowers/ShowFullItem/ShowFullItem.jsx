import React from 'react';
import { addToOrderActionCreator, onShowItemActionCreator } from '../../../redux/flowers-reducer';
import classes from './ShowFullItem.module.css';

// к-та для відображення модального вікна вибраного товару
const ShowFullItem = (props) => {
    let addToOrder = () => {
        let item = props.item;
        // метод додавання товару в корзину покупок dispatch(addToOrderActionCreator(item)); + в метод передається item
        props.dispatch(addToOrderActionCreator(item));
    }

    return (
        <div className={classes.full_item}>
            <div>
                {/* img повинні знаходитися в папці publik/img */}
                <img src={"./img/" + props.item.img} />
                {/* метод dispatch(onShowItemActionCreator(props.item)) закрити модальне вікно; + в метод передається item */}
                <div className={classes.closeModWind} onClick={() => props.dispatch(onShowItemActionCreator(props.item))}>X</div>
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