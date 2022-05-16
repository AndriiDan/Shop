import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          title: '<Біла троянда',
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
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
