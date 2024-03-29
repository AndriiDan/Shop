// import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

// к-та навігації по застосунку
const Navbar = () => {
    return (
        <ul className={classes.nav}>
            <li className={classes.item}><NavLink to="/" className={navData => navData.isActive ? classes.active : classes.item}>Головна</NavLink></li>
            <li className={classes.item}><NavLink to="/flowers" className={navData => navData.isActive ? classes.active : classes.item}>Квіти</NavLink></li>
            <li className={classes.item}><NavLink to="/aboutUs" className={navData => navData.isActive ? classes.active : classes.item}>Про нас</NavLink></li>
            <li className={classes.item}><NavLink to="/contacts" className={navData => navData.isActive ? classes.active : classes.item}>Контакти</NavLink></li>
            <li className={classes.item}><NavLink to="/reviews" className={navData => navData.isActive ? classes.active : classes.item}>Відгуки</NavLink></li>
            <li className={classes.item}>
                <span className={classes.loginBlock}>
                    {/* <NavLink to="/office" className={navData => navData.isActive ? classes.active : classes.item}>Кабінет</NavLink> */}
                    <NavLink to="/login" className={navData => navData.isActive ? classes.active : classes.item}>Login</NavLink>
                </span>
            </li>
        </ul>
    )
}

export default Navbar;