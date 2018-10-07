import React, { Component } from 'react';
import '../../../App.css';

class Footer extends Component {
  render() {
    var FontAwesome = require('react-fontawesome');


    return (
      <div className='footerContainer'>
        <div className="flex-center">
          <i className="fa fa-twitter fa-4x icon-3d"></i>
          <i className="fa fa-facebook fa-4x icon-3d"></i>
          <i className="fa fa-instagram fa-4x icon-3d"></i>
        </div>
      </div>
    );
  }
}

export default Footer;
