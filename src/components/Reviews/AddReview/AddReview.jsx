import React from 'react';
import classes from './AddReview.module.css';

const AddReview = () => {
    return (
        <div className={classes.addReview}>
            <textarea></textarea>
            <button>Додати відгук</button>
        </div>
    )
}

export default AddReview;