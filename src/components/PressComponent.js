import React from 'react'

const PressComponent = () => {
  return(
    <div className="row" id="press-row">
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <h3 className="col-sm-6">Designed to empower the pro bono ecosystem.</h3>
          <div className="col-sm-3"></div>
        </div>
        <div className="row" id="feature-row">
          <div className="col-sm-4">
            <h4>Efficient Program Management</h4>
            <p>Paladin streamlines the referral process and creates a single source of truth for the status of your pro bono opportunities.</p>
          </div>
          <div className="col-sm-4">
            <h4>Targeted Automated Distribution</h4>
            <p>Prevent bottlenecks and optimize engagement with Paladin by creating custom rules based on attorney preferences.</p>
          </div>
          <div className="col-sm-4">
            <h4>Robust Standardized Data</h4>
            <p>Increase Visibility into your pro bono program, track real-time participation, and monitor your team's impact data.</p>
          </div>
        </div>
        <div className="row" id="paladin-featured-in-row">
          <h6 id="featured-h6">Paladin has been featured in</h6>
        </div>
        <div className="row" id="publications-row">
          <div className="col-sm-1"></div>
          <img className="col-sm-2" src={require('../images/fastcompany-logo.svg')} alt=""/>
          <img className="col-sm-2" src={require('../images/legaltech-news-logo.svg')} alt=""/>
          <img className="col-sm-2" src={require('../images/above-the-law-logo.svg')} alt=""/>
          <img className="col-sm-2" src={require('../images/chicago-tribune-logo.svg')} alt=""/>
          <img className="col-sm-2" src={require('../images/techcrunch-logo.svg')} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default PressComponent
