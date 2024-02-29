import React from 'react'

import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Order Checkout</h2>
          <p className="items">Items</p>
          <p className="items-price">5.00</p>
          <p className="delivery-fee">Delivery fee</p>
          <p className="delivery-price">3.00</p>
        </div>
        <div className="container-bot">
          <p className="total">Total</p>
          <p className="price-total">15.00</p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }}>Checkout</Button>
    </div>
  )
}
