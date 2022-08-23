import React from 'react';
// import classes from 'Login.module.css';

const Office = (props) => {
    console.log(props)
    // debugger;
    // вийти з кабінету
    let leaveOffice = () => {
        //     // значення з input Login
        //     let login = "";
        //     // значення з input Password
        //     let password = "";
        //     // callback з LoginContainer - ф-ція (через dispatch(action)) відправлення форми
        //     props.resetData(login, password);
    }

    return (
        <div>
            <h1>Особистий кабінет</h1>
            <button onClick={leaveOffice}>Вийти</button>
        </div>
    )
}



const Login = (props) => {
    console.log(props)

    // посилання на елемент (input Login)
    let loginElement = React.createRef(); // input Login
    let passwordElement = React.createRef(); // input password

    // ф-ція обробник подій для input Login
    let onLoginChange = () => {
        // значення з input
        let text = loginElement.current.value;
        // callback з LoginContainer - ф-ція (через dispatch(action)) - оновлення тексту в input через оновлення state
        props.updateLoginText(text);
    }

    // ф-ція обробник подій для input Password
    let onPasswordChange = () => {
        // значення з input
        let text = passwordElement.current.value;
        // callback з LoginContainer - ф-ція (через dispatch(action)) - оновлення тексту в input через оновлення state
        props.updatePasswordText(text);
    }

    // ф-ція для відправлення форми
    let onEnterData = () => {
        // значення з input Login
        let login = loginElement.current.value;
        // значення з input Password
        let password = passwordElement.current.value;
        // callback з LoginContainer - ф-ція (через dispatch(action)) відправлення форми
        props.enterData(login, password);
    }



    return (
        <div>
            {props.login === "Login" && props.password === "Password"
                ? Office()
                : <div>
                    <h1>Вхід в особистий кабінет</h1>
                    {/* <form> */}
                    <div>
                        <input ref={loginElement} onChange={onLoginChange} value={props.newLoginText} placeholder={"Login"} />
                    </div>
                    <div>
                        <input ref={passwordElement} onChange={onPasswordChange} value={props.newPasswordText}
                            // type={"password"}
                            placeholder={"Password"} />
                    </div>
                    <div>
                        <input type={"checkbox"} /> remember me
                    </div>
                    <div>
                        <button
                            onClick={onEnterData}
                        >Login</button>
                    </div>
                    {/* </form> */}

                    <h2>Введіть дані, щоб залогінитися</h2>
                    <div>Login: "Login"</div>
                    <div>Password: "Password"</div>
                </div>}
        </div>
    )
}

export default Login;