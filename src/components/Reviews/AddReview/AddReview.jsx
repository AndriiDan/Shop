import React from 'react';
import classes from './AddReview.module.css';

// компонент - "додати відгук"
const AddReview = (props) => {
    // посилання на елемент (textarea)
    let newReviewElement = React.createRef();
    let addReview = () => {
        // ф-ція додавання відгуку
        props.dispatch({ type: 'ADD-NEW-REVIEW' })
    }

    // обробник подій для textarea
    let onReviewChange = () => {
        // значення з textarea
        let text = newReviewElement.current.value;
        // оновлення тексту в textarea через оновлення state
        props.dispatch({ type: 'UPDATE-NEW-REVIEW-TEXT', newText: text })
    }

    return (
        <div className={classes.addReview}>
            <textarea ref={newReviewElement} onChange={onReviewChange} value={props.newReviewText} />
            <button onClick={addReview}>Додати відгук</button>
        </div>
    )
}

export default AddReview;