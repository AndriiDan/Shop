// константи для reducer та actionCreator 
const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_NEW_LOGIN_TEXT = 'UPDATE_NEW_LOGIN_TEXT';
const UPDATE_NEW_PASSWORD_TEXT = 'UPDATE_NEW_PASSWORD_TEXT';
const ENTER_DATA = 'ENTER_DATA';
const RESET_DATA = 'RESET_DATA';

// state для ініціалізації
let initialState = {
    userId: null,
    email: null,
    login: null,
    password: null,
    newLoginText: '',
    newPasswordText: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            // ввести дані користувача
            return {
                ...state,
                ...action.data
            }

        case UPDATE_NEW_LOGIN_TEXT:
            // копія state, щоб connect міг порівнювати зміни старого і нового state
            return {
                ...state,
                newLoginText: action.newText // для оновлення тексту в input в компоненті Login
            };
        case UPDATE_NEW_PASSWORD_TEXT:
            // копія state, щоб connect міг порівнювати зміни старого і нового state
            return {
                ...state,
                newPasswordText: action.newText // для оновлення тексту в input в компоненті Login
            };

        case ENTER_DATA:
            // ввести дані login, password
            return {
                ...state,
                ...action.data
            };

        case RESET_DATA:
            // обнулити дані
            return {
                ...state,
                ...action.data
            };

        default:
            return state;
    }
}

// ActionCreator
export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA, data: { userId, email, login }
})
export const updateLoginText = (text) => ({ type: UPDATE_NEW_LOGIN_TEXT, newText: text }); // оновити текст Login
export const updatePasswordText = (text) => ({ type: UPDATE_NEW_PASSWORD_TEXT, newText: text }); // оновити текст Password
export const enterData = (login, password) => ({ type: ENTER_DATA, data: { login, password } }); // внести дані login і password
export const resetData = (login, password) => ({type: RESET_DATA, data: {login, password}}); // // обнулити дані login i password

export default authReducer;