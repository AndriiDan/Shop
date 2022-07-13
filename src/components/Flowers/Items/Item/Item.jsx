import React, { Component } from 'react';
import classes from './Item.module.css';

export class Item extends Component {
    render() {
        // return (
        //     <div className={classes.item}>
        //         {/* img повинні знаходитися в папці publik/img */}
        //         <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
        //         <h2>{this.props.item.title}</h2>
        //         <p>{this.props.item.desc}</p>
        //         <b>{this.props.item.price} грн.</b>
        //         {/* при onClick елемент item буде додаватися в корзину (до масива oders в App) */}
        //         <div className={classes.add_to_cart} onClick={() => this.props.onAdd(this.props.item)}>+</div>
        //     </div>
        // )


        return (
            <div className={classes.item}>
                {/* img повинні знаходитися в папці publik/img */}
                <img src={"./img/" + this.props.item.img} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price} грн.</b>
                {/* при onClick елемент item буде додаватися в корзину (до масива oders в App) */}
                <div className={classes.add_to_cart}>+</div>
            </div>
        )



    }
}

export default Item;