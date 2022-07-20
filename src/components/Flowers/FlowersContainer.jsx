import { connect } from "react-redux";
import { addToOrderActionCreator, chooseCategoryActionCreator, onShowItemActionCreator } from "../../redux/flowers-reducer";
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

// методи (ф-ції), які передадуться в <Flowers />
const mapDispatchToProps = (dispatch) => {
    return {
        chooseCategory: (categories) => {
            // callback для компоненти Categories
            // actionCreator - метод для вибору категорії dispatch(chooseCategoryActionCreator(el.key); + в метод передається (el.key) = (categories)
            let action = chooseCategoryActionCreator(categories);
            // виконання ф-ції вибору категорії
            dispatch(action);
        },
        addToOrder: (item) => {
            // callback для компоненти Item
            // actionCreator - метод для додавання товару в корзину покупок dispatch(addToOrderActionCreator(item); + в метод передається item
            let action = addToOrderActionCreator(item);
            // виконання ф-ції додавання товару в корзину
            dispatch(action);
        },
        showItem: (item) => {
            // callback для компоненти Item
            // метод dispatch(onShowItemActionCreator(props.item)) показати товар у модальному вікні; + в метод передається item */}
            let action = onShowItemActionCreator(item);
            // виконання ф-ції показати товар у модальному вікні
            dispatch(action);
        }
    }
};

// контейнерна компонента над презинтаційною (Flowers) компонентою
const FlowersContainer = connect(mapStateToProps, mapDispatchToProps)(Flowers);

export default FlowersContainer;