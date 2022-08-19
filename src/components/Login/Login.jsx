import React from 'react';
// import classes from 'Login.module.css';

const Login = () => {
    return (
        <div>
            <h1>Вхід в особистий кабінет</h1>
            <form>
                <div>
                    <input placeholder={"Login"} />
                </div>
                <div>
                    <input type={"password"} placeholder={"Password"} />
                </div>
                <div>
                    <input type={"checkbox"} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;