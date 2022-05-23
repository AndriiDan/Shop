import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";

export default function Header() {
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
                    <div className='shop-cart'>Корзина</div>
                )}
            </div>
            {/* основний банер магазина */}
            <div className='presentation'></div>
        </header>
    )
}
