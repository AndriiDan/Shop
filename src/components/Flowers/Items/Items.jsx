import React, { Component } from 'react';
import Item from './Item/Item';
import classes from './Items.module.css';

// к-та товарів
export class Items extends Component {
    render() {
        return (
            <main className={classes.main}>
                {this.props.items.map(el => (
                    <Item key={el.id} item={el} dispatch={this.props.dispatch} />
                ))}
            </main>
        )
    }
}

export default Items;