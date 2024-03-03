import React from 'react'

import HomeCover from '../../assets/homecover.jpg'
import {
  CategoryCarousel,
  OffersCarousel,
  Footer,
  Header
} from '../../components'
import { Container, CoverImg } from './styles'

export function Home() {
  return (
    <Container
      style={{
        backgroundColor: '#000000'
      }}
    >
      <Header />
      <CoverImg src={HomeCover} />
      <CategoryCarousel />
      <OffersCarousel />
      <Footer />
    </Container>
  )
}
