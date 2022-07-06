import React from 'react';
import classes from './AddReview.module.css';

// компонент - "додати відгук"
const AddReview = (props) => {
    // посилання на елемент (textarea)
    let newReviewElement = React.createRef();
    let addReview = () => {
        // ф-ція додавання відгуку
        props.addNewReview();
        // обнулити весь текст з textarea
        // props.updateNewReviewText('');
    }

    // обробник подій для textarea
    let onReviewChange = () => {
        // значення з textarea
        let text = newReviewElement.current.value;
        // оновлення тексту в textarea через оновлення state
        props.updateNewReviewText(text);
    }

    return (
        <div className={classes.addReview}>
            <textarea ref={newReviewElement} onChange={onReviewChange} value={props.newReviewText} />
            <button onClick={addReview}>Додати відгук</button>
        </div>
    )
}

export default AddReview;