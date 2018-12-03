import React from 'react'

const BottomComponent = () => {
  return (

        <div className="row" id="cuban-row">
          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-5">
                <p id="cuban-quote">
                  “With Paladin, lawyers can work on issues they’re passionate about and teams can leverage pro bono to build their businesses. It’s an important mission that I’m proud to be part of.”
                </p>
              </div>
              <div className="col-lg-3">
                <img id="cuban-img" src={require('../images/cuban.png')} alt=""/>
                <div id="cuban-text">
                  <p>Mark Cuban</p>
                  <b>Paladin Investor</b>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
            <div className="row">
              <h5 id="partners-title">Investment partners helping us close the justice gap </h5>
            </div>
            <div className="row" id="partner-logos">
              <div className="col-lg-1"></div>
              <img className="col-lg-2" src={require('../images/human-ventures-logo.svg')} alt=""/>
              <img className="col-lg-2" src={require('../images/hyde-park-logo.svg')} alt=""/>
              <img className="col-lg-2" src={require('../images/backstage-capital-logo.svg')} alt=""/>
              <img id="chaac" className="col-lg-2" src={require('../images/chaac-ventures-logo.svg')} alt=""/>
              <img className="col-lg-2" src={require('../images/ny-empire-state-development-logo.svg')} alt=""/>
            </div>
          </div>
        </div>

  )
}

export default BottomComponent
