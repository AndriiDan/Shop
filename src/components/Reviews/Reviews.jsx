import React from 'react';
import AddReview from './AddReview/AddReview';
import Review from './Review/Review';
import classes from './Reviews.module.css';

// к-та відгуків про магазин
const Reviews = () => {
    return (
        <div>
            <h1>Відгуки про нас:</h1>
            <div className={classes.reviews}>
                <Review review="Дякую, молоці!" />
                <Review review="Дуже гарні квіти." />
                <Review review="Замовлення доставили швидко. Дякую." />
            </div>
            <AddReview />
        </div>
    )
}

export default Reviews;