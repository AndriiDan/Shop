import React from 'react';
import classes from './AddReview.module.css';

// компонент - "додати відгук"
const AddReview = () => {

    // посилання на елемент (textarea)
    let newReviewElement = React.createRef();
    let addReview = () => {
        // значення з textarea
        let text = newReviewElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.addReview}>
            <textarea ref={newReviewElement}></textarea>
            <button onClick={addReview}>Додати відгук</button>
        </div>
    )
}

export default AddReview;