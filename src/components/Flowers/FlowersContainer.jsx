import { connect } from "react-redux";
import { addToOrder, chooseCategory, showItem } from "../../redux/flowers-reducer";
import Flowers from "./Flowers";

// дані, які передадуться в <Flowers />
const mapStateToProps = (state) => {
    return {
        items: state.flowersPage.currentItems,
        categories: state.flowersPage.categories,
        showFullItem: state.flowersPage.showFullItem,
        fullItem: state.flowersPage.fullItem
    }
};

// контейнерна компонента над презинтаційною (Flowers) компонентою
const FlowersContainer = connect(mapStateToProps, { chooseCategory: chooseCategory, addToOrder: addToOrder, showItem: showItem })(Flowers);

export default FlowersContainer;

// chooseCategory - метод для вибору категорії
// addToOrder - метод для додавання товару в корзину покупок
// showItem - // метод для показу товару у модальному вікні