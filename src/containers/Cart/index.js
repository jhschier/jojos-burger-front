import React from 'react'

import CartCover from '../../assets/homecover.jpg'
import { CartItems, CartResume } from '../../components'
import { Container, CoverImg, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CoverImg src={CartCover} />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
