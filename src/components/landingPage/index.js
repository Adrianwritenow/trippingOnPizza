import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ScrollableAnchor from 'react-scrollable-anchor'

import '../../App.css';
import AboutUs from '../aboutUs';
import Banner from '../banner';
import Food from '../food';





class LandingPage extends Component {
  render() {
    return (
      <div className='landingPageContainer'>
        <Banner />
        <Carousel>
          <Carousel.Item>
          <img className='carouselEating' alt="900x500" src="images/eating1.png" alt='firstImage'/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className='carouselEating' alt="900x500" src=" images/eating2.png" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className='carouselEating' alt="900x500" src="images/eating3.png" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <ScrollAnimation animateIn='fadeInLeft'>
          <AboutUs />
        </ScrollAnimation>
        <ScrollableAnchor id={'food'}>
          <Food />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
        <div className='formWrapper'>
          <h1>CONTACT US</h1>
          <form action="https://formspree.io/your@email.com" method="POST">
            <input type="text" placeholder="YOUR NAME?" name="name"/>
            <input type="email" placeholder="YOUR EMAIL?" name="_replyto"/>
            <textarea name="message" placeholder="WHAT'S UP?"></textarea>
            <button type="submit" value="Send">SUBMIT</button>
          </form>
        </div>
      </ScrollableAnchor>

      </div>
    );
  }
}

export default LandingPage;
