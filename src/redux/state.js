const ADD_NEW_REVIEW = 'ADD-NEW-REVIEW';
const UPDATE_NEW_REVIEW_TEXT = 'UPDATE-NEW-REVIEW-TEXT';

let store = {
    // приватний
    _state: {
        flowersPage: {
            flowers: [
                {
                    id: 1,
                    title: 'Червона троянда',
                    img: 'RoseRed.jpg',
                    desc: 'Опис товару',
                    category: 'rose',
                    price: '35'
                },
                {
                    id: 2,
                    title: 'Біла троянда',
                    img: 'RoseWhite.jpg',
                    desc: 'Опис товару',
                    category: 'rose',
                    price: '35'
                },
                {
                    id: 3,
                    title: 'Зелена троянда',
                    img: 'RoseGreen.jpg',
                    desc: 'Опис товару',
                    category: 'rose',
                    price: '35'
                },
                {
                    id: 4,
                    title: 'Ромашка біла',
                    img: 'ChamomileWhite.jpg',
                    desc: 'Опис товару',
                    category: 'chamomile', // ромашка
                    price: '25'
                },
                {
                    id: 5,
                    title: 'Ромашка синя',
                    img: 'ChamomileBlue.jpg',
                    desc: 'Опис товару',
                    category: 'chamomile', // ромашка
                    price: '25'
                },
                {
                    id: 6,
                    title: 'Тюльпан червоний',
                    img: 'TulipRed.jpg',
                    desc: 'Опис товару',
                    category: 'tulip', // Тюльпан
                    price: '30'
                },
                {
                    id: 7,
                    title: 'Тюльпан фіолетовий',
                    img: 'TulipViolet.jpg',
                    desc: 'Опис товару',
                    category: 'tulip', // Тюльпан
                    price: '30'
                },
                {
                    id: 8,
                    title: 'Тюльпан жовтий',
                    img: 'TulipYellow.jpg',
                    desc: 'Опис товару',
                    category: 'tulip', // Тюльпан
                    price: '30'
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
            currentItems: [{
                id: 1,
                title: 'Червона троянда',
                img: 'RoseRed.jpg',
                desc: 'Опис товару',
                category: 'rose',
                price: '35'
            },
            {
                id: 2,
                title: 'Біла троянда',
                img: 'RoseWhite.jpg',
                desc: 'Опис товару',
                category: 'rose',
                price: '35'
            },
            {
                id: 3,
                title: 'Зелена троянда',
                img: 'RoseGreen.jpg',
                desc: 'Опис товару',
                category: 'rose',
                price: '35'
            },
            {
                id: 4,
                title: 'Ромашка біла',
                img: 'ChamomileWhite.jpg',
                desc: 'Опис товару',
                category: 'chamomile', // ромашка
                price: '25'
            },
            {
                id: 5,
                title: 'Ромашка синя',
                img: 'ChamomileBlue.jpg',
                desc: 'Опис товару',
                category: 'chamomile', // ромашка
                price: '25'
            },
            {
                id: 6,
                title: 'Тюльпан червоний',
                img: 'TulipRed.jpg',
                desc: 'Опис товару',
                category: 'tulip', // Тюльпан
                price: '30'
            },
            {
                id: 7,
                title: 'Тюльпан фіолетовий',
                img: 'TulipViolet.jpg',
                desc: 'Опис товару',
                category: 'tulip', // Тюльпан
                price: '30'
            },
            {
                id: 8,
                title: 'Тюльпан жовтий',
                img: 'TulipYellow.jpg',
                desc: 'Опис товару',
                category: 'tulip', // Тюльпан
                price: '30'
            }],
            // відображати модальне вікно з конкретним товаром при "true"
            showFullItem: false,
            // об'єкт який відобразити в модальному вікні
            fullItem: {}
        },
        reviewsPage: {
            reviewsData: [
                { id: 1, review: "Дякую, молоці!", likesCount: 5 },
                { id: 2, review: "Дуже гарні квіти.", likesCount: 10 },
                { id: 3, review: "Замовлення доставили швидко. Дякую.", likesCount: 7 }
            ],
            newReviewText: ''
        }
    },
    // для цієї ф-ції замість console.log присвоїться значення з ф-ції subscribe (те, що прийде в ній як callback, тобто callSubscriber з index.js)
    _callSubscriber() {
        console.log("state was changed");
    },

    // метод, для взаємодій з state
    getState() {
        return this._state;
    },
    // ф-ція "наглядач", щоб прокинути в index.js callSubscriber як callback, щоб не було циклічної залежності між state.js та index.js
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    // вибрати категорію
    chooseCategory(category) {
        // для категорії 'all'
        if (category === 'all') {
            this._state.flowersPage.currentItems = this._state.flowersPage.flowers;
            // після зміни state перемалювати все дерево
            this._callSubscriber(this._state);
            return;
        }
        // для решти категорій
        this._state.flowersPage.currentItems = this._state.flowersPage.flowers.filter(el => el.category === category);

        // після зміни state перемалювати все дерево
        this._callSubscriber(this._state);
    },


    // метод dispatch в собі містить багато сценаріїв в залежності від action.type
    dispatch(action) {
        if (action.type === 'ADD-TO-ORDER') {
            // додавання товарів в корзину
            // чи є в корзині елемент з конкретним id
            let isInArray = false;

            // перевірка, чи товар вже є в корзині
            this._state.flowersPage.orders.forEach(el => {
                if (el.id === action.item.id) {
                    isInArray = true
                }
            });
            // якщо товара немає в корзині, то додати його в корзину в кінець масива
            if (!isInArray) {
                this._state.flowersPage.orders.push(action.item);
            };

            // після зміни state перемалювати все дерево
            this._callSubscriber(this._state);
        } else if (action.type === "DELETE-ORDER") {
            // видалення товара з корзини
            // filter створить новий масив, в який ввійдуть всі елементи з orders окрім елемента, id якого сюди передається
            this._state.flowersPage.orders = this._state.flowersPage.orders.filter(el => el.id !== action.id);
            // після зміни state перемалювати все дерево
            this._callSubscriber(this._state);
        } else if (action.type === 'ON-SHOW-ITEM') {
            // метод для відображення модального вікна товару при натисненні на картинку товару
            // об'єкт який відобразити в модальному вікні
            this._state.flowersPage.fullItem = action.item;
            // змінити значення на протилежне (false/true)
            this._state.flowersPage.showFullItem = !this._state.flowersPage.showFullItem;
            // після зміни state перемалювати все дерево
            this._callSubscriber(this._state);
        } else if (action.type === ADD_NEW_REVIEW) {
            // для додавання нового відгуку
            let newReview = {
                id: 4,
                review: this._state.reviewsPage.newReviewText,
                likesCount: 0
            };
            // додати в кінець масива новий відгук
            this._state.reviewsPage.reviewsData.push(newReview);
            // обнулити весь текст з textarea компоненти AddReview
            this._state.reviewsPage.newReviewText = '';
            // після зміни state перемалювати все дерево
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_REVIEW_TEXT) {
            // для оновлення тексту в textarea в компоненті AddReview
            this._state.reviewsPage.newReviewText = action.newText;
            // після зміни state перемалювати все дерево
            this._callSubscriber(this._state);
        }
    }
}

// ActionCreator
export const addNewReviewActionCreator = () => ({ type: ADD_NEW_REVIEW })
export const updateNewReviewActionCreator = (text) => ({ type: UPDATE_NEW_REVIEW_TEXT, newText: text })

// для можливості перегляду state в консолі (ввести store)
window.store = store;

export default store;