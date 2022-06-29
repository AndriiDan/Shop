import React from 'react';
import AddReview from './AddReview/AddReview';
import Review from './Review/Review';
import classes from './Reviews.module.css';



// к-та відгуків про магазин
const Reviews = () => {

    // масив даних (імітація сервера)
    let reviewsData = [
        { id: 1, review: "Дякую, молоці!", likesCount: 5 },
        { id: 2, review: "Дуже гарні квіти.", likesCount: 10 },
        { id: 3, review: "Замовлення доставили швидко. Дякую.", likesCount: 7 }
    ]

    // новий масив із компонент Review-відгуків
    let reviewsElements = reviewsData.map((review) => {
        let rev = <Review review={review.review} likesCount={review.likesCount} />;
        return (
            // додатково <div> для стилів, щоб кожний відгук був з нового рядка
            <div>{rev}</div>
        )
    });

    return (
        <div>
            <h1>Відгуки про нас:</h1>
            <div className={classes.reviews}>
                {/* список відгуків */}
                <div>{reviewsElements}</div>
            </div>
            <AddReview />
        </div>
    )
}

export default Reviews;