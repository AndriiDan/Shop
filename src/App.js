import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
// import Flowers from './components/Flowers/Flowers';
import FlowersContainer from './components/Flowers/FlowersContainer';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Office from './components/Office/Office';
import ReviewsContainer from './components/Reviews/ReviewsContainer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <HeaderContainer
          //  store={this.props.store}
          />
          <div className="wrapper-content">
            <Routes>
              <Route path="/flowers" element={<FlowersContainer
              //  store={this.props.store}
              />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/reviews" element={<ReviewsContainer
              //  store={this.props.store}
              />} />
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