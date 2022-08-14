import { connect } from 'react-redux';
import { delOrder } from '../../redux/flowers-reducer';
import Header from './Header';

// дані, які передадуться в <Header />
const mapStateToProps = (state) => {
    return {
        orders: state.flowersPage.orders
    }
};

// контейнерна компонента над презинтаційною (Header) компонентою
const HeaderContainer = connect(mapStateToProps, { delOrder })(Header);

export default HeaderContainer;

// delOrder - метод видалення товару з корзини