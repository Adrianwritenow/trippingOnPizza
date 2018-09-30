import React, { Component } from 'react';
import Header from './header';
import '../../App.css';

class BaseLayout extends Component {
  render() {
    return (
      <div className='baseLayoutContainer'>
        <Header />
          {this.props.children}
        <footer>Footer holder</footer>
      </div>
    );
  }
}

export default BaseLayout;
