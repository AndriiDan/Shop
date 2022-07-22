// константи для reducer та actionCreator 
const CHOOSE_CATEGORY = 'CHOOSE-CATEGORY';
const ADD_TO_ORDER = 'ADD-TO-ORDER';
const DELETE_ORDER = 'DELETE-ORDER';
const ON_SHOW_ITEM = 'ON-SHOW-ITEM';

// state для ініціалізації
let initialState = {
    flowers: [
        {
            id: 1,
            title: 'Червона троянда',
            img: 'RoseRed.jpg',
            desc: 'Опис товару',
            category: 'rose',
            price: '35',
            isInArray: false
        },
        {
            id: 2,
            title: 'Біла троянда',
            img: 'RoseWhite.jpg',
            desc: 'Опис товару',
            category: 'rose',
            price: '35',
            isInArray: false
        },
        {
            id: 3,
            title: 'Зелена троянда',
            img: 'RoseGreen.jpg',
            desc: 'Опис товару',
            category: 'rose',
            price: '35',
            isInArray: false
        },
        {
            id: 4,
            title: 'Ромашка біла',
            img: 'ChamomileWhite.jpg',
            desc: 'Опис товару',
            category: 'chamomile', // ромашка
            price: '25',
            isInArray: false
        },
        {
            id: 5,
            title: 'Ромашка синя',
            img: 'ChamomileBlue.jpg',
            desc: 'Опис товару',
            category: 'chamomile', // ромашка
            price: '25',
            isInArray: false
        },
        {
            id: 6,
            title: 'Тюльпан червоний',
            img: 'TulipRed.jpg',
            desc: 'Опис товару',
            category: 'tulip', // Тюльпан
            price: '30',
            isInArray: false
        },
        {
            id: 7,
            title: 'Тюльпан фіолетовий',
            img: 'TulipViolet.jpg',
            desc: 'Опис товару',
            category: 'tulip', // Тюльпан
            price: '30',
            isInArray: false
        },
        {
            id: 8,
            title: 'Тюльпан жовтий',
            img: 'TulipYellow.jpg',
            desc: 'Опис товару',
            category: 'tulip', // Тюльпан
            price: '30',
            isInArray: false
        }
    ],
    // orders - сюди будуть додаватися товари, які будуть відображені всередині корзини
    orders: [],
    categories: [
        {
            key: 'all',
            name: 'Всі'
        },
        {
            key: 'rose',
            name: 'Троянди'
        },
        {
            key: 'chamomile',
            name: 'Ромашки (хризантема)'
        },
        {
            key: 'tulip',
            name: 'Тюльпани'
        }
    ],
    // зберігає елементи, які будуть показані користувачу; при першому завантаженні currentItems = flowers (незнаю як присвоїти, тому скопіював)
    // currentItems: [this._state.flowersPage.flowers],
    // currentItems: [...this.flowers],
    currentItems: [{
        id: 1,
        title: 'Червона троянда',
        img: 'RoseRed.jpg',
        desc: 'Опис товару',
        category: 'rose',
        price: '35',
        isInArray: false
    },
    {
        id: 2,
        title: 'Біла троянда',
        img: 'RoseWhite.jpg',
        desc: 'Опис товару',
        category: 'rose',
        price: '35',
        isInArray: false
    },
    {
        id: 3,
        title: 'Зелена троянда',
        img: 'RoseGreen.jpg',
        desc: 'Опис товару',
        category: 'rose',
        price: '35',
        isInArray: false
    },
    {
        id: 4,
        title: 'Ромашка біла',
        img: 'ChamomileWhite.jpg',
        desc: 'Опис товару',
        category: 'chamomile', // ромашка
        price: '25',
        isInArray: false
    },
    {
        id: 5,
        title: 'Ромашка синя',
        img: 'ChamomileBlue.jpg',
        desc: 'Опис товару',
        category: 'chamomile', // ромашка
        price: '25',
        isInArray: false
    },
    {
        id: 6,
        title: 'Тюльпан червоний',
        img: 'TulipRed.jpg',
        desc: 'Опис товару',
        category: 'tulip', // Тюльпан
        price: '30',
        isInArray: false
    },
    {
        id: 7,
        title: 'Тюльпан фіолетовий',
        img: 'TulipViolet.jpg',
        desc: 'Опис товару',
        category: 'tulip', // Тюльпан
        price: '30',
        isInArray: false
    },
    {
        id: 8,
        title: 'Тюльпан жовтий',
        img: 'TulipYellow.jpg',
        desc: 'Опис товару',
        category: 'tulip', // Тюльпан
        price: '30',
        isInArray: false
    }],
    // відображати модальне вікно з конкретним товаром при "true"
    showFullItem: false,
    // об'єкт який відобразити в модальному вікні
    fullItem: {}
}

// reducer для сторінки flowersPage
const flowersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_CATEGORY: {
            // копія state, щоб connect міг порівнювати зміни старого і нового state
            let stateCopy = {
                ...state,
                currentItems: [...state.currentItems],
                flowers: [...state.flowers]
            };

            // вибрати категорію
            // для категорії 'all'
            if (action.category === 'all') {
                stateCopy.currentItems = stateCopy.flowers;
                return stateCopy;
            }
            // для решти категорій
            stateCopy.currentItems = stateCopy.flowers.filter(el => el.category === action.category);
            return stateCopy;
        }

        case ADD_TO_ORDER: {
            // копія state, щоб connect міг порівнювати зміни старого і нового state
            let stateCopy = {
                ...state,
                orders: [...state.orders],
                currentItems: [...state.currentItems]
            };

            // додавання товарів в корзину
            // перевірка, чи товар вже є в корзині
            stateCopy.orders.forEach(el => {
                if (el.id === action.item.id) {
                    el.isInArray = true
                }
            });
            // якщо товара немає в корзині, то додати його в корзину в кінець масива
            if (!action.item.isInArray) {
                stateCopy.orders.push(action.item);
                action.item.isInArray = true; // чи є в корзині елемент з конкретним id
            };
            return stateCopy;
        }

        case DELETE_ORDER: {
            // копія state, щоб connect міг порівнювати зміни старого і нового state
            let stateCopy = {
                ...state,
                orders: [...state.orders],
                currentItems: [...state.currentItems]
            };

            // видалення товара з корзини
            // filter створить новий масив, в який ввійдуть всі елементи з orders окрім елемента, id якого сюди передається
            stateCopy.orders = stateCopy.orders.filter(el => el.id !== action.item.id
            );
            action.item.isInArray = false; // чи є в корзині елемент з конкретним id
            return stateCopy;
        }

        case ON_SHOW_ITEM:
            // копія state, щоб connect міг порівнювати зміни старого і нового state
            return {
                ...state,
                fullItem: action.item, // об'єкт який відобразити в модальному вікні
                showFullItem: !state.showFullItem // змінити значення на протилежне (false/true) відкрити/закрити мдальне вікно
            };

        default:
            return state;
    }
}

// ActionCreator
export const chooseCategoryActionCreator = (category) => ({ type: CHOOSE_CATEGORY, category: category }); // вибрати категорію
export const addToOrderActionCreator = (item) => ({ type: ADD_TO_ORDER, item: item }); // додати товар в корзину
export const deleteOrderActionCreator = (item) => ({ type: DELETE_ORDER, item: item }); // видалити конкретний товар з корзини
export const onShowItemActionCreator = (item) => ({ type: ON_SHOW_ITEM, item: item }); // відкрити(закрити) модальне вікно

export default flowersReducer;