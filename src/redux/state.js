// для цієї ф-ції замість console.log присвоїться значення з ф-ції subscribe (те, що прийде в ній як callback, тобто callSubscriber з index.js)
let callSubscriber = () => {
    console.log("state was changed");
}

let state = {
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
        ]
    },
    reviewsPage: {
        reviewsData: [
            { id: 1, review: "Дякую, молоці!", likesCount: 5 },
            { id: 2, review: "Дуже гарні квіти.", likesCount: 10 },
            { id: 3, review: "Замовлення доставили швидко. Дякую.", likesCount: 7 }
        ],
        newReviewText: ''
    }
}

// для можливості перегляду state в консолі (ввести state)
window.state = state;

// ф-ція для додавання нового відгуку
export const addNewReview = () => {
    let newReview = {
        id: 4,
        review: state.reviewsPage.newReviewText,
        likesCount: 0
    };

    // додати в кінець масива новий відгук
    state.reviewsPage.reviewsData.push(newReview);
    // обнулити весь текст з textarea компоненти AddReview
    state.reviewsPage.newReviewText = '';
    // після зміни state перемалювати все дерево
    callSubscriber(state);
}

// ф-ція для оновлення тексту в textarea в компоненті AddReview
export const updateNewReviewText = (newText) => {
    state.reviewsPage.newReviewText = newText;
    callSubscriber(state);
}

// ф-ція "наглядач", щоб прокинути в index.js callSubscriber як callback, щоб не було циклічної залежності між state.js та index.js
export const subscribe = (observer) => {
    callSubscriber = observer;
}

export default state;