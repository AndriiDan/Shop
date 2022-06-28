import React from 'react';
import classes from './Reviews.module.css';

// к-та відгуків про магазин
const Reviews = () => {
    return (
        <div>
            <h1>Відгуки про нас:</h1>
            <div className={classes.reviews}>
                <div className={classes.review}>Дякую, молоці!</div>
                <div className={classes.review}>Дуже гарні квіти.</div>
                <div className={classes.review}>Замовлення доставили швидко. Дякую.</div>
            </div>
            <div className={classes.addReview}>
                <textarea></textarea>
                <button>Додати відгук</button>
            </div>
        </div>

    )
}

export default Reviews;