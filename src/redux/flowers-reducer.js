// константи для reducer та actionCreator 
const CHOOSE_CATEGORY = 'CHOOSE-CATEGORY';
const ADD_TO_ORDER = 'ADD-TO-ORDER';
const DELETE_ORDER = 'DELETE-ORDER';
const ON_SHOW_ITEM = 'ON-SHOW-ITEM';

// reducer для сторінки flowersPage
const flowersReducer = (state, action) => {
    if (action.type === CHOOSE_CATEGORY) {
        // вибрати категорію
        // для категорії 'all'
        if (action.category === 'all') {
            state.currentItems = state.flowers;
            return state;
        }
        // для решти категорій
        state.currentItems = state.flowers.filter(el => el.category === action.category);
    } else if (action.type === ADD_TO_ORDER) {
        // додавання товарів в корзину
        // чи є в корзині елемент з конкретним id
        let isInArray = false;
        // перевірка, чи товар вже є в корзині
        state.orders.forEach(el => {
            if (el.id === action.item.id) {
                isInArray = true
            }
        });
        // якщо товара немає в корзині, то додати його в корзину в кінець масива
        if (!isInArray) {
            state.orders.push(action.item);
        };
    } else if (action.type === DELETE_ORDER) {
        // видалення товара з корзини
        // filter створить новий масив, в який ввійдуть всі елементи з orders окрім елемента, id якого сюди передається
        state.orders = state.orders.filter(el => el.id !== action.id);
    } else if (action.type === ON_SHOW_ITEM) {
        // метод для відображення модального вікна товару при натисненні на картинку товару
        // об'єкт який відобразити в модальному вікні
        state.fullItem = action.item;
        // змінити значення на протилежне (false/true)
        state.showFullItem = !state.showFullItem;
    }
    // повернути оновлений state
    return state;
}

// ActionCreator
export const chooseCategoryActionCreator = (category) => ({ type: CHOOSE_CATEGORY, category: category }); // вибрати категорію
export const addToOrderActionCreator = (item) => ({ type: ADD_TO_ORDER, item: item }); // додати товар в корзину
export const deleteOrderActionCreator = (id) => ({ type: DELETE_ORDER, id: id }); // видалити конкретний товар з корзини
export const onShowItemActionCreator = (item) => ({ type: ON_SHOW_ITEM, item: item }); // відкрити(закрити) модальне вікно

export default flowersReducer;