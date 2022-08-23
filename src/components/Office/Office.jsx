import React from 'react';
import classes from './Office.module.css';

const Office = (props) => {

    let leaveOffice = () => {
        // callback з LoginContainer - ф-ція (через dispatch(action)) обнулення login і password = перехід на сторінку Login
        props.resetData();
    }

    return (
        <div>
            <h1>Особистий кабінет!</h1>
            <button onClick={leaveOffice}>Вийти</button>
        </div>
    )
}

export default Office;