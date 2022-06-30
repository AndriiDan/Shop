import React from 'react';
import Items from './Items/Items';
import Categories from './Categories/Categories';
import classes from './Flowers.module.css';
import ShowFullItem from './ShowFullItem/ShowFullItem';

// к-та для відображення квітів
const Flowers = (props) => {
    return (
        <div>
            <Categories chooseCategory={props.chooseCategory} />
            <Items items={props.items} onAdd={props.onAdd} onShowItem={props.onShowItem} />
            {/* при showFullItem: true - відобразити <ShowFullItem /> */}
            {props.showFullItem && <ShowFullItem item={props.fullItem} onAdd={props.onAdd} onShowItem={props.onShowItem} />}
        </div>
    )
}

export default Flowers;