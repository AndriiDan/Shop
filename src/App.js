import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import FlowersContainer from './components/Flowers/FlowersContainer';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import HomePage from './components/HomePage/HomePage';
import LoginContainer from './components/Login/LoginContainer';
import Office from './components/Office/Office';
import ReviewsContainer from './components/Reviews/ReviewsContainer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <HeaderContainer />
          <div className="wrapper-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/flowers" element={<FlowersContainer />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/reviews" element={<ReviewsContainer />} />
              <Route path="/office" element={<Office />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;