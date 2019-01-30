import React, { Component } from 'react';
import './App.css';
// components
import Header from './components/Global/Header/Header';
import Content from './components/Global/Content/Content';
import Footer from './components/Global/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
