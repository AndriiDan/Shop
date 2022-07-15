import React, { Component } from 'react';
import classes from './Categories.module.css';

// к-та для відображення категорій квітів
const Categories = (props) => {
    return (
        <div className={classes.categories}>
            {props.categories.map(el => (
                <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
};

export default Categories;
