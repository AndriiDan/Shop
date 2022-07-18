import React from 'react';
import classes from './AddReview.module.css';

// компонент - "додати відгук"
const AddReview = (props) => {

    // посилання на елемент (textarea)
    let newReviewElement = React.createRef();

    // ф-ція додавання відгуку
    let onAddReview = () => {
        // callback з ReviewsContainer - ф-ція (через dispatch(action)) додавання відгуку
        props.addReview();
    }

    // ф-ція обробник подій для textarea
    let onReviewChange = () => {
        // значення з textarea
        let text = newReviewElement.current.value;
        // callback з ReviewsContainer - ф-ція (через dispatch(action)) - оновлення тексту в textarea через оновлення state
        props.reviewChange(text);
    }

    return (
        <div className={classes.addReview}>
            <textarea ref={newReviewElement} onChange={onReviewChange} value={props.newReviewText} />
            <button onClick={onAddReview}>Додати відгук</button>
        </div>
    )
}

export default AddReview;