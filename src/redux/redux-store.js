// import { combineReducers, createStore } from "redux";
import { combineReducers, legacy_createStore as createStore } from "redux";
import flowersReducer from "./flowers-reducer";
import reviewsReducer from "./reviews-reducer";

// flowersPage, reviewsPage - state з даними; flowersReducer, reviewsReducer - методи і дії, які виконуємо з state
let reducers = combineReducers({
    flowersPage: flowersReducer,
    reviewsPage: reviewsReducer
});

// створюємо store
let store = createStore(reducers);

// для можливості перегляду state в консолі (ввести store)
window.store = store;

export default store;