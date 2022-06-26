import React from 'react';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import ShowFullItem from './components/ShowFullItem/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // orders - сюди будуть додаватися товари, які будуть відображені всередині корзини
      orders: [],
      // зберігає елементи, які будуть показані користувачу
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Червона троянда',
          img: 'RoseRed.jpg',
          desc: 'Опис товару',
          category: 'rose',
          price: '35'
        },
        {
          id: 2,
          title: 'Біла троянда',
          img: 'RoseWhite.jpg',
          desc: 'Опис товару',
          category: 'rose',
          price: '35'
        },
        {
          id: 3,
          title: 'Зелена троянда',
          img: 'RoseGreen.jpg',
          desc: 'Опис товару',
          category: 'rose',
          price: '35'
        },
        {
          id: 4,
          title: 'Ромашка біла',
          img: 'ChamomileWhite.jpg',
          desc: 'Опис товару',
          category: 'chamomile', // ромашка
          price: '25'
        },
        {
          id: 5,
          title: 'Ромашка синя',
          img: 'ChamomileBlue.jpg',
          desc: 'Опис товару',
          category: 'chamomile', // ромашка
          price: '25'
        },
        {
          id: 6,
          title: 'Тюльпан червоний',
          img: 'TulipRed.jpg',
          desc: 'Опис товару',
          category: 'tulip', // Тюльпан
          price: '30'
        },
        {
          id: 7,
          title: 'Тюльпан фіолетовий',
          img: 'TulipViolet.jpg',
          desc: 'Опис товару',
          category: 'tulip', // Тюльпан
          price: '30'
        },
        {
          id: 8,
          title: 'Тюльпан жовтий',
          img: 'TulipYellow.jpg',
          desc: 'Опис товару',
          category: 'tulip', // Тюльпан
          price: '30'
        }
      ],
      // відображати модальне вікно з конкретним товаром при "true"
      showFullItem: false,
      // об'єкт який відобразити в модальному вікні
      fullItem: {}
    }

    // при завантаженні сторінки відображати весь масив items
    this.state.currentItems = this.state.items;

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} onShowItem={this.onShowItem} />
        {/* при showFullItem: true - відобразити <ShowFullItem /> */}
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
        <Footer />
      </div>
    );
  }

  // вибрати категорію
  chooseCategory(category) {
    // для категорії 'all'
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    // для решти категорій (окрім 'all')
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
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
