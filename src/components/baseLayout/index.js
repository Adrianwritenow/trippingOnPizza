import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

import '../../App.css';

class BaseLayout extends Component {
  render() {
    return (
      <div className='baseLayoutContainer'>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;
