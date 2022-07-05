import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import Flowers from './components/Flowers/Flowers';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Office from './components/Office/Office';
import Reviews from './components/Reviews/Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // orders - сюди будуть додаватися товари, які будуть відображені всередині корзини
      orders: [],
      // зберігає елементи, які будуть показані користувачу
      currentItems: [],
      // відображати модальне вікно з конкретним товаром при "true"
      showFullItem: false,
      // об'єкт який відобразити в модальному вікні
      fullItem: {}
    }

    // дані квітів з зовнішнього state
    this.flowers = props.state.flowersPage.flowers;

    // при завантаженні сторінки відображати весь масив items (flowers)
    this.state.currentItems = this.flowers;

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <div className="wrapper-content">
            <Routes>
              <Route path="/flowers" element={<Flowers chooseCategory={this.chooseCategory} items={this.state.currentItems} onAdd={this.addToOrder} onShowItem={this.onShowItem} showFullItem={this.state.showFullItem} fullItem={this.state.fullItem} />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/reviews" element={<Reviews reviewsData={this.props.state.reviewsPage.reviewsData} addNewReview={this.props.addNewReview} />} />
              <Route path="/office" element={<Office />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }

  // вибрати категорію
  chooseCategory(category) {
    // для категорії 'all'
    if (category === 'all') {
      this.setState({ currentItems: this.flowers })
      return
    }

    // для решти категорій (окрім 'all')
    this.setState({
      currentItems: this.flowers.filter(el => el.category === category)
    })
  }

  // додавання товарів в корзину
  addToOrder(item) {
    // чи є в корзині
    let isInArray = false;

    // перевірка, чи товар вже є в корзині
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })

    // якщо товара немає в корзині, то додати в корзину
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }

  // видалення товара з корзини
  deleteOrder(id) {
    // filter створить новий масив, в який ввійдуть всі елементи з orders окрім елемента, id якого сюди передається
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  // метод для відображення модального вікна товару при натисненні на картинку товару
  onShowItem(item) {
    // для fullItem присвоєти отриманий конкретний item 
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

}

export default App;
