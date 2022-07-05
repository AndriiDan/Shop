import React from 'react';
import classes from './AddReview.module.css';

// компонент - "додати відгук"
const AddReview = (props) => {

    // посилання на елемент (textarea)
    let newReviewElement = React.createRef();
    let addReview = () => {
        // значення з textarea
        let text = newReviewElement.current.value;
        props.addNewReview(text);
    }

    return (
        <div className={classes.addReview}>
            <textarea ref={newReviewElement}></textarea>
            <button onClick={addReview}>Додати відгук</button>
        </div>
    )
}

export default AddReview;