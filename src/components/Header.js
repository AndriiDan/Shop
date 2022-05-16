import React from 'react';

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
            </div>
            {/* основний банер магазина */}
            <div className='presentation'></div>
        </header>
    )
}
