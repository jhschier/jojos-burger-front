import React from 'react'

import { useCart } from '../../hooks/CartContext'
import { Container, Header, Body, ImageContainer, ProductImage } from './styles'

export function CartItems() {
  const { cartProducts } = useCart()
  console.log(cartProducts)
  return (
    <Container>
      <Header>
        <p></p>
        <p>Items</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </Header>
      {cartProducts &&
        cartProducts.map(product => (
          <Body key={product.id}>
            <ImageContainer>
              <ProductImage src={product.url} />
            </ImageContainer>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <p>{product.quantity * product.price}</p>
          </Body>
        ))}
    </Container>
  )
}
