import React from 'react';
import { addNewReviewActionCreator, updateNewReviewActionCreator } from '../../redux/reviews-reducer';
import Reviews from './Reviews';

// к-та відгуків про магазин
const ReviewsContainer = (props) => {

    // callback для компоненти AddReview - "додати відгук"
    let addReview = () => {
        // actionCreator - додавання відгуку
        let action = addNewReviewActionCreator();
        // виконання ф-ції
        props.store.dispatch(action);
    }

    // callback для компоненти AddReview - обробник подій для textarea (посимвольне оновлення через оновлення state)
    let reviewChange = (text) => {
        // actionCreator - значення з textarea
        let action = updateNewReviewActionCreator(text);
        // оновлення тексту в textarea через оновлення state
        props.store.dispatch(action);
    }

    return (
        <Reviews
            reviewsData={props.store.getState().reviewsPage.reviewsData}
            newReviewText={props.store.getState().reviewsPage.newReviewText}
            addReview={addReview} reviewChange={reviewChange} />
    )
}

export default ReviewsContainer;