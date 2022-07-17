import React from 'react';
import classes from './AddReview.module.css';
import { addNewReviewActionCreator, updateNewReviewActionCreator } from '../../../redux/reviews-reducer';

// компонент - "додати відгук"
const AddReview = (props) => {
    // посилання на елемент (textarea)
    let newReviewElement = React.createRef();
    let addReview = () => {
        // ф-ція додавання відгуку
        props.dispatch(addNewReviewActionCreator())
    }

    // обробник подій для textarea
    let onReviewChange = () => {
        // значення з textarea
        let text = newReviewElement.current.value;
        // оновлення тексту в textarea через оновлення state
        props.dispatch(updateNewReviewActionCreator(text))
    }

    return (
        <div className={classes.addReview}>
            <textarea ref={newReviewElement} onChange={onReviewChange} value={props.newReviewText} />
            <button onClick={addReview}>Додати відгук</button>
        </div>
    )
}

export default AddReview;