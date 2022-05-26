import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';

// перебор кожного елемента в корзині
const showOrders = (props) => {
    return (
        <div>
            {props.oders.map(el => (
                <Order key={el.id} item={el} onDelete={props.onDelete} />
            ))}
        </div>
    )
}

// якщо корзина пуста
const showNothisng = () => {
    return (
        <div className='empty'>
            <h2>Товарів не вибрано</h2>
        </div>
    )
}

export default function Header(props) {
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
                        {props.oders.length > 0 ?
                            showOrders(props) : showNothisng()}

                    </div>
                )}
            </div>
            {/* основний банер магазина */}
            <div className='presentation'></div>
        </header>
    )
}
