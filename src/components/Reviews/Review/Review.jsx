import React from 'react';
import classes from './Review.module.css';

// к-та для конкретного відгуку про магазин
const Review = (props) => {
    return (
        <div className={classes.review}>
            <img src={require('../../../img/smile.jpg')} />
            <div>{props.review}</div>
        </div>
    )
}

export default Review;