// константи для reducer та actionCreator 
const SET_USER_DATA = 'SET_USER_DATA';

// state для ініціалізації
let initialState = {
    userId: null,
    email: null,
    login: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            // ввести дані користувача
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

// ActionCreator
export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA, data: { userId, email, login }
})

export default authReducer;