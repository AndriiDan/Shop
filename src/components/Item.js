import React, { Component } from 'react';

export class Item extends Component {
    render() {
        return (
            <div className='item'>
                {/* img повинні знаходитися в папці publik/img */}
                <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem()} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price} грн.</b>
                {/* при onClick елемент item буде додаватися в корзину (до масива oders в App) */}
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}

export default Item;
