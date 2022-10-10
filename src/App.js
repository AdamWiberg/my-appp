import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Nav from './Nav';
import Content from './Content';

const App = () => {
  return (
  <div className = 'app-wrapper'>
    <Header />
    <NavBar />
    <Footer />
    <Nav />
    <Content />
     </div>
  );
}

export default App;
