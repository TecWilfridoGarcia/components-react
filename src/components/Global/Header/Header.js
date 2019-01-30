import React, { Component } from 'react';
//  import logo from 'logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          {/* <img src={logo} alt="logo" /> */}
          <h2>NavBar React</h2>
        </header>
      </div>
    );
  }
}

export default Header;
