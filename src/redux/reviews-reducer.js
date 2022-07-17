// константи для reducer та actionCreator 
const ADD_NEW_REVIEW = 'ADD-NEW-REVIEW';
const UPDATE_NEW_REVIEW_TEXT = 'UPDATE-NEW-REVIEW-TEXT';

const reviewsReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_REVIEW:
            // для додавання нового відгуку
            let newReview = {
                id: 4,
                review: state.newReviewText,
                likesCount: 0
            };
            // додати в кінець масива новий відгук
            state.reviewsData.push(newReview);
            // обнулити весь текст з textarea компоненти AddReview
            state.newReviewText = '';
            return state;
        case UPDATE_NEW_REVIEW_TEXT:
            // для оновлення тексту в textarea в компоненті AddReview
            state.newReviewText = action.newText;
            return state;
        default:
            return state;
    }
}

// ActionCreator
export const addNewReviewActionCreator = () => ({ type: ADD_NEW_REVIEW }); // додати новий відгук
export const updateNewReviewActionCreator = (text) => ({ type: UPDATE_NEW_REVIEW_TEXT, newText: text }); // оновити текст відгука

export default reviewsReducer;