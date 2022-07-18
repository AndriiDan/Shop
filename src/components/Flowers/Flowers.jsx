import React from 'react';
import Items from './Items/Items';
import Categories from './Categories/Categories';
import classes from './Flowers.module.css';
import ShowFullItem from './ShowFullItem/ShowFullItem';

// к-та для відображення квітів
const Flowers = (props) => {
    return (
        <div>
            <Categories categories={props.categories} chooseCategory={props.chooseCategory} />
            <Items items={props.items} addToOrder={props.addToOrder} showItem={props.showItem} />

            {/* при showFullItem: true - відобразити <ShowFullItem /> */}
            {props.showFullItem && <ShowFullItem item={props.fullItem} addToOrder={props.addToOrder} showItem={props.showItem} />}
        </div>
    )
}

export default Flowers;