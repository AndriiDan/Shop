import React from 'react';
import classes from './Review.module.css';

// к-та для конкретного відгуку про магазин
const Review = (props) => {
    return (
        <div className={classes.review}>
            <div>
                <img src={require('../../../img/smile.jpg')} />
            </div>
            <div>{props.review}</div>
            <div className={classes.like}>
                {props.likesCount} like
            </div>
        </div>
    )
}

export default Review;