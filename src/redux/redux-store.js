// import { combineReducers, createStore } from "redux";
import { combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import flowersReducer from "./flowers-reducer";
import reviewsReducer from "./reviews-reducer";

// flowersPage, reviewsPage - state з даними; flowersReducer, reviewsReducer, authReducer - методи і дії, які виконуємо з state
let reducers = combineReducers({
    flowersPage: flowersReducer,
    reviewsPage: reviewsReducer,
    auth: authReducer
});

// створюємо store
let store = createStore(reducers);

// для можливості перегляду state в консолі (ввести store)
window.store = store;

export default store;