import React from 'react'
import { Button } from 'react-bootstrap'
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const HeroComponent = (props) => {

  return (
    <div className="row" id="hero-row">
      <div className="container">
        <div className="row" id="header">
          <h1 className="col-sm-2">Paladin</h1>
          <div className="col-sm-6"></div>
          <div className="col-sm-4">
            <a>Team</a>
            <a>Blog</a>
            <a>Login</a>
            <a>Request a Demo</a>
          </div>
        </div>
        <div className="container">
          <div className="row" id="hero-splash">
            <div className="col-sm-4" id="hero-text">
              <h2>Infrastructure for Pro Bono <span className="underline">Champions</span>.</h2>
              <p id="hero-p">Seamlessly staff, manage, and track your pro bono work so your team can focus on what's important.</p>
              <Fab variant="extended" id="demo-button">Request a Demo</Fab>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <img id="hero-image" src={require('../images/hero-image.png')} alt=""/>
            </div>
          </div>
        </div>
        <div className="row" id="brand-recognition">
          <h6>Paladin is the pro bono system of record for the world's leading law firms and companies, including:</h6>
          <img className="logo" src={require('../images/dentons-logo.svg')} alt=""/>
          <img className="logo" src={require('../images/lyft-logo.svg')} alt=""/>
          <img className="logo" src={require('../images/wilson-sonsini-logo.svg')} alt=""/>
          <img className="logo" src={require('../images/verizon-logo.svg')} alt=""/>
        </div>
      </div>
    </div>

  )
}

export default HeroComponent
