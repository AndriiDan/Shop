import React, { Component } from 'react';
import Item from './Item/Item';
import classes from './Items.module.css';

// к-та товарів
export class Items extends Component {
    render() {
        return (
            <main className={classes.main}>
                {this.props.items.map(el => (
                    <Item key={el.id} item={el} addToOrder={this.props.addToOrder} showItem={this.props.showItem} />
                ))}
            </main>
        )
    }
}

export default Items;