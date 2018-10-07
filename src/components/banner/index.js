import React, { Component } from 'react';
import '../../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


class Banner extends Component {
  render() {
    return (
      <div className='bannerContainer'>
      <ScrollAnimation duration={1.5} animateIn='rotateIn' animateOut='rotateOut'>

        <img src='images/mainLogo1.png'/>
      </ScrollAnimation>
      </div>
    );
  }
}

export default Banner;
