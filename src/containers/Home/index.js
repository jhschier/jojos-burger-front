import React from 'react'

import HomeCover from '../../assets/homecover.jpg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, CoverImg } from './styles'

function Home() {
  return (
    <Container
      style={{
        backgroundColor: '#000000'
      }}
    >
      <CoverImg src={HomeCover} />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home
