import React from 'react'
import HeroComponent from './HeroComponent'
import PressComponent from './PressComponent'
import CarouselComponent from './CarouselComponent'

const ContainerComponent = () => {
  return (
    <div className="container-fluid">
      <HeroComponent />
      <PressComponent />
      <CarouselComponent />
    </div>
  )
}

export default ContainerComponent
