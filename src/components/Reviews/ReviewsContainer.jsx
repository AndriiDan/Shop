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

// к-та відгуків про магазин
// контейнерна компонента над презинтаційною (Reviews) компонентою
const ReviewsContainer = connect(mapStateToProps,
    { addReview: addNewReviewActionCreator, reviewChange: updateNewReviewActionCreator }
)(Reviews);

export default ReviewsContainer;

// addReview - callback для компоненти AddReview - "додати відгук"
// reviewChange - callback для компоненти AddReview - обробник подій для textarea (посимвольне оновлення через оновлення state)