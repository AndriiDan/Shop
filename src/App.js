import React from 'react';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // orders - сюди будуть додаватися товари, які будуть відображені всередині корзини
      orders: [],
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
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
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

}

export default App;
