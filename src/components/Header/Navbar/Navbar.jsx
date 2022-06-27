// import React from 'react';
import classes from './Navbar.module.css';

// к-та навігації по застосунку
const Navbar = () => {
    return (
        <ul className={classes.nav}>
            <li><a href="/flowers">Квіти</a></li>
            <li><a href="/aboutUs">Про нас</a></li>
            <li><a href="/contacts">Контакти</a></li>
            <li><a href="/office">Кабінет</a></li>
        </ul>
    )
}

export default Navbar;