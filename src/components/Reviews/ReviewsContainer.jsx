import { connect } from 'react-redux';
import { addNewReviewActionCreator, updateNewReviewActionCreator } from '../../redux/reviews-reducer';
import Reviews from './Reviews';

// дані, які передадуться в <Reviews />
const mapStateToProps = (state) => {
    return {
        reviewsData: state.reviewsPage.reviewsData,
        newReviewText: state.reviewsPage.newReviewText
    }
};

// методи (ф-ції), які передадуться в <Reviews />
const mapDispatchToProps = (dispatch) => {
    return {
        addReview: () => {
            // callback для компоненти AddReview - "додати відгук"
            // actionCreator - додавання відгуку
            let action = addNewReviewActionCreator();
            // виконання ф-ції
            dispatch(action);
        },
        reviewChange: (text) => {
            // callback для компоненти AddReview - обробник подій для textarea (посимвольне оновлення через оновлення state)
            // actionCreator - значення з textarea
            let action = updateNewReviewActionCreator(text);
            // оновлення тексту в textarea через оновлення state
            dispatch(action);
        }
    }
};

// к-та відгуків про магазин
// контейнерна компонента над презинтаційною (Reviews) компонентою
const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);

export default ReviewsContainer;