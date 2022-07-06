import { rerenderEntireTree } from "../render";

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

// ф-ція для додавання нового відгуку
export let addNewReview = () => {
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
    rerenderEntireTree(state);
}

// ф-ція для оновлення тексту в textarea в компоненті AddReview
export let updateNewReviewText = (newText) => {
    state.reviewsPage.newReviewText = newText;
    rerenderEntireTree(state);
}

export default state;