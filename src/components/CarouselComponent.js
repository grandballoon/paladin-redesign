import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Attribution from './Attribution'

const CarouselComponent = () => {
  return (
    <div className="row" id="carousel-row">
      <div id="carousel-container">
        <Carousel id="carousel" indicators={false} interval={8500}>
          <Carousel.Item>
            <div className="carousel-item" id="item-1">
              <p className="carousel-quote">“Paladin has increased volunteer engagement and streamlined the management of our pro bono program. We’ve had an outstanding experience as an early adopter.”</p>
              <Attribution imgSrc={require('../images/frantz-image-2.jpg')} name={"John Frantz"} title={"Vice President & Associate General Counsel "} company={"Verizon"}/> 
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item" id="item-2">
              <p className="carousel-quote">“Paladin has increased volunteer engagement and streamlined the management of our pro bono program. We’ve had an outstanding experience as an early adopter.”</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item" id="item-3">
              <p className="carousel-quote">“Paladin has increased volunteer engagement and streamlined the management of our pro bono program. We’ve had an outstanding experience as an early adopter.”</p>

            </div>
          </Carousel.Item>
        </Carousel>

          <div id="demo-button-container" className="row">
            <Col lg={8} lgOffset={2}>
              <Button className="btn-block" id="bottom-demo-button" >Request a Demo</Button>
            </Col>
          </div>



      </div>
    </div>
  )
}

export default CarouselComponent
