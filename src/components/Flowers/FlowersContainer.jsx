import { addToOrderActionCreator, chooseCategoryActionCreator, onShowItemActionCreator } from "../../redux/flowers-reducer";
import Flowers from "./Flowers";

const FlowersContainer = (props) => {

    // callback для компоненти Categories
    let chooseCategory = (categories) => {
        // actionCreator - метод для вибору категорії dispatch(chooseCategoryActionCreator(el.key); + в метод передається (el.key) = (categories)
        let action = chooseCategoryActionCreator(categories);
        // виконання ф-ції вибору категорії
        props.store.dispatch(action);
    }

    // callback для компоненти Item
    let addToOrder = (item) => {
        // actionCreator - метод для додавання товару в корзину покупок dispatch(addToOrderActionCreator(item); + в метод передається item
        let action = addToOrderActionCreator(item);
        // виконання ф-ції додавання товару в корзину
        props.store.dispatch(action);
    }

    // callback для компоненти Item
    let showItem = (item) => {
        // метод dispatch(onShowItemActionCreator(props.item)) показати товар у модальному вікні; + в метод передається item */}
        let action = onShowItemActionCreator(item);
        // виконання ф-ції показати товар у модальному вікні
        props.store.dispatch(action);
    }

    return (
        <Flowers
            items={props.store.getState().flowersPage.currentItems}
            categories={props.store.getState().flowersPage.categories}
            showFullItem={props.store.getState().flowersPage.showFullItem}
            fullItem={props.store.getState().flowersPage.fullItem}
            chooseCategory={chooseCategory}
            addToOrder={addToOrder}
            showItem={showItem} />
    )
}

export default FlowersContainer;