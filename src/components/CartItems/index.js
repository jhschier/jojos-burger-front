import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  Header,
  Body,
  EmptyCart,
  ProductImage,
  ImageContainer
} from './styles'

export function CartItems() {
  const { cartProducts } = useCart()
  console.log(cartProducts)

  const isCartEmpty = !cartProducts || cartProducts.length === 0
  return (
    <Container>
      {isCartEmpty ? null : (
        <Header>
          <p></p>
          <p>Items</p>
          <p>Price</p>
          <p style={{ paddingRight: 30 }}>Quantity</p>
          <p>Total</p>
        </Header>
      )}
      {isCartEmpty ? (
        <EmptyCart> The cart is empty </EmptyCart>
      ) : (
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
        ))
      )}
    </Container>
  )
}
