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
            <Items items={props.items} dispatch={props.dispatch} />

            {/* при showFullItem: true - відобразити <ShowFullItem /> */}
            {props.showFullItem && <ShowFullItem item={props.fullItem} dispatch={props.dispatch} />}
        </div>
    )
}

export default Flowers;