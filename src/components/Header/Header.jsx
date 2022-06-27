import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order/Order';
import classes from './Header.module.css';
import Navbar from './Navbar/Navbar';

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
            <p className={classes.summa}>Загальна вартість замовлення: {new Intl.NumberFormat().format(summa)} грн.</p>
        </div>
    )
}

// якщо корзина пуста
const showNothing = () => {
    return (
        <div className={classes.empty}>
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
                <span className={classes.logo}>Flowers-shop</span>
                <Navbar />
                {/* іконка з корзинкою; ${cartOpen && 'active'} - при cartOpen = true додати className='active'  */}
                <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`${classes.shop_cart_button} ${cartOpen && classes.active}`} />

                {cartOpen && (
                    <div className={classes.shop_cart}>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}

                    </div>
                )}
            </div>
            {/* основний банер магазина */}
            <div className={classes.presentation}></div>
        </header>
    )
}
