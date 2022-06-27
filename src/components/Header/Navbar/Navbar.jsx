// import React from 'react';
import classes from './Navbar.module.css';

// к-та навігації по застосунку
const Navbar = () => {
    return (
        <ul className={classes.nav}>
            <li>Квіти</li>
            <li>Про нас</li>
            <li>Контакти</li>
            <li>Кабінет</li>
        </ul>
    )
}

export default Navbar;