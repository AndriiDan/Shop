import { connect } from 'react-redux';
import { deleteOrderActionCreator } from '../../redux/flowers-reducer';
import Header from './Header';

// дані, які передадуться в <Header />
const mapStateToProps = (state) => {
    return {
        orders: state.flowersPage.orders
    }
};

// методи (ф-ції), які передадуться в <Header />
const mapDispatchToProps = (dispatch) => {
    return {
        delOrder: (id) => {
            // callback для компоненти Order - видалити товар з корзини
            // actionCreator - метод видалення товару з корзини dispatch(deleteOrderActionCreator(id)); + в метод передається id
            let action = deleteOrderActionCreator(id);
            // виконання ф-ції видалення товару з корзини
            dispatch(action);
        }
    }
};

// контейнерна компонента над презинтаційною (Header) компонентою
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;