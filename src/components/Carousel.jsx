import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CampaignCard from './CampaignCard'

function CarouselSlide(props) {
  var items = [
    {
      name: '1',
      description:
        'Dela till dina vänner så får du nästa leverans helt gratis!',
    },
    {
      name: '2',
      description: 'Vi på Souperb önskar alltid dig en smaklig måltid!',
    },
    {
      name: '3',
      description: 'Glöm inte prova våran nya goda Tom Ka Gai soppa!',
    },
  ]

  return (
    <Carousel
      swipe
      autoPlay
      animation="slide"
      interval={6000}
      stopAutoPlayOnHover
      navButtonsAlwaysInvisible
      indicatorContainerProps={{
        style: {
          marginBottom: '32px',
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item(props) {
  return <CampaignCard text={props.item.description} />
}

export default CarouselSlide
