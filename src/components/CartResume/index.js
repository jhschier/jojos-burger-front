import React, { useState, useEffect } from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryFee] = useState(3)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumPrice = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setFinalPrice(sumPrice)
  }, [cartProducts, deliveryFee])
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Order Checkout</h2>
          <p className="items">Items</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-fee">Delivery fee</p>
          <p className="delivery-price">{formatCurrency(deliveryFee)}</p>
        </div>
        <div className="container-bot">
          <p className="total">Total</p>
          <p className="price-total">
            {formatCurrency(finalPrice + deliveryFee)}
          </p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }}>Checkout</Button>
    </div>
  )
}
