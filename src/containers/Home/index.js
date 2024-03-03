import React from 'react'

import HomeCover from '../../assets/homecover.jpg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, CoverImg } from './styles'

export function Home() {
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
