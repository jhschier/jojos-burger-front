import React from 'react'

import HomeCover from '../../assets/CoverHome2.jpg'
import CategoryCarousel from '../../components/CategoryCarousel'
import { Container, HomeCoverImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeCoverImg src={HomeCover} alt="jojosburger-home-cover-image" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home
