import React from 'react'

import TrashCan from '../../assets/trash-icon.png'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  Header,
  Body,
  EmptyCart,
  ProductImage,
  ImageContainer,
  ContainerEmptyCart
} from './styles'

export function CartItems() {
  const { cartProducts, increaseQuantity, decreaseQuantity, deleteProduct } =
    useCart()

  const isCartEmpty = !cartProducts || cartProducts.length === 0

  return (
    <Container>
      {isCartEmpty ? null : (
        <Header>
          <p></p>
          <p>Items</p>
          <p>Price</p>
          <p style={{ paddingRight: 40 }}>Quantity</p>
          <p>Total</p>
        </Header>
      )}
      {isCartEmpty ? (
        <ContainerEmptyCart>
          <EmptyCart> The cart is empty </EmptyCart>
        </ContainerEmptyCart>
      ) : (
        cartProducts.map(product => (
          <Body key={product.id}>
            <ImageContainer>
              <ProductImage src={product.url} />
            </ImageContainer>

            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
            <p>
              {formatCurrency(product.quantity * product.price)}{' '}
              <button onClick={() => deleteProduct(product.id)}>
                <img src={TrashCan} />
              </button>
            </p>
          </Body>
        ))
      )}
    </Container>
  )
}
