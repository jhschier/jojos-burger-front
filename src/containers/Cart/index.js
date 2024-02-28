import React from 'react'

import CartCover from '../../assets/homecover.jpg'
import { Footer, CartItems } from '../../components'
import { Container, CoverImg } from './styles'

export function Cart() {
  return (
    <Container>
      <CoverImg src={CartCover} />
      <CartItems />
      <Footer />
    </Container>
  )
}
