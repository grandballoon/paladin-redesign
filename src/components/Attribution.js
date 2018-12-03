import React from 'react'

const Attribution = (props) => {

  return(
    <div className="attribution-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-2">
            <div id="attribution-image-container">
                <img className="attribution-thumbnail" src={props.imgSrc} alt=""/>
            </div>
          </div>
          <div className="attribution-text-container col-lg-4">
            <p className="attribution-text">{props.name}</p>
            <p className="attribution-text ">{props.title}</p>
            <p className="attribution-text">{props.company}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Attribution
