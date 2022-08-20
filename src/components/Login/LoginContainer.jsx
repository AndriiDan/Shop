import { connect } from "react-redux";
import { updateLoginText, updatePasswordText, enterData } from "../../redux/auth-reducer";
import Login from "./Login";

// дані, які передадуться в <Login />
const mapStateToProps = (state) => {
    return {
        newLoginText: state.auth.newLoginText,
        newPasswordText: state.auth.newPasswordText,
        // login: state.auth.login,
        // password: state.auth.password
    }
};


// контейнерна компонента над перезинтаційною (Login) компонентою
const LoginContainer = connect(mapStateToProps, { updateLoginText, updatePasswordText, 
    // enterData
 })(Login);

export default LoginContainer;

// updateLoginText - метод для оновлення тексту Login
// updatePasswordText - метод для оновлення тексту Password
// enterData - метод для встановлення введаних Login та Password