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
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header orders={this.props.state.flowersPage.orders} dispatch={this.props.dispatch} />
          <div className="wrapper-content">
            <Routes>
              <Route path="/flowers" element={<Flowers items={this.props.state.flowersPage.currentItems} dispatch={this.props.dispatch}
                categories={this.props.state.flowersPage.categories} chooseCategory={this.props.chooseCategory} onShowItem={this.props.onShowItem}
                showFullItem={this.props.state.flowersPage.showFullItem} fullItem={this.props.state.flowersPage.fullItem} />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/reviews" element={<Reviews reviewsData={this.props.state.reviewsPage.reviewsData}
                newReviewText={this.props.state.reviewsPage.newReviewText}
                dispatch={this.props.dispatch} />} />
              <Route path="/office" element={<Office />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;