import React, { Component } from 'react';
import Item from './Item/Item';
import classes from './Items.module.css';

export class Items extends Component {
    render() {
        return (
            <main className={classes.main}>
                {this.props.items.map(el => (
                    <Item key={el.id} item={el} onAdd={this.props.onAdd} onShowItem={this.props.onShowItem} />
                ))}
            </main>
        )
    }
}

export default Items;