import React from 'react'

import bgHome from '../../assets/bg-home.jpg'
import HomeCover from '../../assets/CoverHome3.jpg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, CoverImg } from './styles'

function Home() {
  return (
    <Container
      style={{
        backgroundImage: `url(${bgHome})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <CoverImg src={HomeCover} />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home
