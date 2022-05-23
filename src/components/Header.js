import React from 'react';
import { FaShoppingBasket } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <div>
                <span className='logo'>Flowers-shop</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                </ul>
                {/* іконка з корзинкою */}
                <FaShoppingBasket className='shop-cart-button' />
            </div>
            {/* основний банер магазина */}
            <div className='presentation'></div>
        </header>
    )
}
