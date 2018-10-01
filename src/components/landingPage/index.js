import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import '../../App.css';
import AboutUs from '../aboutUs';
import Banner from '../banner';




class LandingPage extends Component {
  render() {
    return (
      <div className='landingPageContainer'>
        <Banner />
        <Carousel>
          <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="images/CHARACTER_2.png" alt='firstImage'/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img width={900} height={500} alt="900x500" src=" images/CHARACTER_3.png" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="images/CHARACTER_4.png" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <ScrollAnimation animateIn='zoomInDown'>
          <AboutUs />
        </ScrollAnimation>
      </div>
    );
  }
}

export default LandingPage;
