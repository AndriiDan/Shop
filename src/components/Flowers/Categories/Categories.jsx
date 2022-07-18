import React from 'react';
import { chooseCategoryActionCreator } from '../../../redux/flowers-reducer';
import classes from './Categories.module.css';

// к-та для відображення категорій квітів
const Categories = (props) => {
    return (
        <div className={classes.categories}>
            {props.categories.map(el => (
                // метод dispatch(chooseCategoryActionCreator(el.key)) вибрати категорію товару; + в метод передається key для категорії 
                // <div key={el.key} onClick={() => props.dispatch(chooseCategoryActionCreator(el.key))}>{el.name}</div>
                <div key={el.key} onClick={() => {
                    // callback з FlowersContainer - ф-ція (через dispatch(action)) - вибір категорії; + в callback передається (el.key) = (category)
                    props.chooseCategory(el.key)
                }}>{el.name}</div>
            ))}
        </div>
    )
};

export default Categories;