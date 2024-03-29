import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import classes from './Header.module.css';
import Navbar from './Navbar/Navbar';
import ShowNothing from './ShowNothing/ShowNothing';
import ShowOrders from './ShowOrders/ShowOrders';

// export default function Header(props) {
const Header = (props) => {

    // хук для зміни cartOpen за допомогоє ф-ції setCartOpen
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className={classes.logo}>Flowers-shop</span>
                <Navbar />
                {/* іконка з корзинкою; ${cartOpen && 'active'} - при cartOpen = true додати className='active'  */}
                <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`${classes.shop_cart_button} ${cartOpen && classes.active}`} />

                {/* при натисненні на корзину з товарами відобразити ShowOrders або ShowNothing */}
                {cartOpen && (
                    <div className={classes.shop_cart}>
                        {props.orders.length > 0 ?
                            // показати вибрані елементи в корзині
                            <ShowOrders orders={props.orders} delOrder={props.delOrder} /> :
                            // якщо корзина пуста
                            <ShowNothing />}
                    </div>
                )}
            </div>
            {/* основний банер магазина */}
            {/* <div className={classes.presentation}></div> */}
        </header>
    )
}

export default Header;