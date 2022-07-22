import React from 'react';
import classes from './ShowFullItem.module.css';

// к-та для відображення модального вікна вибраного товару
const ShowFullItem = (props) => {

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
        <div className={classes.full_item}>
            <div>
                {/* img повинні знаходитися в папці publik/img */}
                <img src={"./img/" + props.item.img} />
                <div className={classes.closeModWind} onClick={onShowItem}>X</div>
                <h2>{props.item.title}</h2>
                <p>{props.item.desc}</p>
                <b>{props.item.price} грн.</b>
                {/* при onClick елемент item буде додаватися в корзину (до масива oders в App) */}
                <div className={classes.add_to_cart} onClick={onAddToOrder}>+</div>
                {/* якщо isInArray = true, то відобразити "Товар у корзині" */}
                {props.item.isInArray &&
                    <div className={classes.inOrder}>Товар у корзині</div>
                }
            </div>
        </div>
    )
}

export default ShowFullItem;