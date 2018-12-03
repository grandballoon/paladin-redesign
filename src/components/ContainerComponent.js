import React from 'react'
import HeroComponent from './HeroComponent'
import PressComponent from './PressComponent'
import CarouselComponent from './CarouselComponent'
import BottomComponent from './BottomComponent'

const ContainerComponent = () => {
  return (
    <div className="container-fluid">
      <HeroComponent />
      <PressComponent />
      <CarouselComponent />
      <BottomComponent />

    </div>
  )
}

export default ContainerComponent
