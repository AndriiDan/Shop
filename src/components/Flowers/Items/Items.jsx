import React from 'react';
import Item from './Item/Item';
import classes from './Items.module.css';

// к-та товарів
const Items = (props) => {
    return (
        <main className={classes.main}>
            {props.items.map(el => (
                <Item key={el.id} item={el} addToOrder={props.addToOrder} showItem={props.showItem} />
            ))}
        </main>
    )
}

export default Items;