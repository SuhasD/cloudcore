import React, { Component } from 'react';
import Menu from './MenuRoute'
import './App.css';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div>
        <Menu/>
	  </div>
    );
  }
}

export default Header;