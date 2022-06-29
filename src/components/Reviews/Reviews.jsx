import React from 'react';
import AddReview from './AddReview/AddReview';
import Review from './Review/Review';
import classes from './Reviews.module.css';

let reviewsData = [
    { id: 1, review: "Дякую, молоці!", likesCount: 5 },
    { id: 2, review: "Дуже гарні квіти.", likesCount: 10 },
    { id: 3, review: "Замовлення доставили швидко. Дякую.", likesCount: 7 }
]

// к-та відгуків про магазин
const Reviews = () => {
    return (
        <div>
            <h1>Відгуки про нас:</h1>
            <div className={classes.reviews}>
                <div>
                    <Review review={reviewsData[0].review} likesCount={reviewsData[0].likesCount} />
                </div>
                <div>
                    <Review review={reviewsData[1].review} likesCount={reviewsData[1].likesCount} />
                </div>
                <div>
                    <Review review={reviewsData[2].review} likesCount={reviewsData[2].likesCount} />
                </div>
            </div>
            <AddReview />
        </div>
    )
}

export default Reviews;