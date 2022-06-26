import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';

// перебор кожного елемента в корзині
const showOrders = (props) => {
    let summa = 0;
    // Number.parseFloat(el.price) - перетворюємо в число, оскільки в items.price: "" (рядок)
    props.orders.forEach(el => summa += Number.parseFloat(el.price));
    return (
        <div>
            {props.orders.map(el => (
                <Order key={el.id} item={el} onDelete={props.onDelete} />
            ))}
            {/* new Intl.NumberFormat().format(summa) - заокруглює суму до '2-х' знаків після коми (при цінах з 2-ма знаками після коми) */}
            <p className='summa'>Загальна вартість замовлення: {new Intl.NumberFormat().format(summa)} грн.</p>
        </div>
    )
}

// якщо корзина пуста
const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товарів не вибрано</h2>
        </div>
    )
}

export default function Header(props) {
    // хук для зміни cartOpen за допомогоє ф-ції setCartOpen
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='logo'>Flowers-shop</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                </ul>
                {/* іконка з корзинкою; ${cartOpen && 'active'} - при cartOpen = true додати className='active'  */}
                <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}

                    </div>
                )}
            </div>
            {/* основний банер магазина */}
            <div className='presentation'></div>
        </header>
    )
}
