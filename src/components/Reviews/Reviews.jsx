import React from 'react';
import AddReview from './AddReview/AddReview';
import Review from './Review/Review';
import classes from './Reviews.module.css';

// к-та відгуків про магазин
const Reviews = (props) => {

    // новий масив із компонент Review-відгуків
    let reviewsElements = props.reviewsData.map((review) => {
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
            <AddReview newReviewText={props.newReviewText} dispatch={props.dispatch}
                addReview={props.addReview} reviewChange={props.reviewChange} />
        </div>
    )
}

export default Reviews;