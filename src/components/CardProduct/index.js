import PropTypes from 'prop-types'
import React from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import {
  Container,
  ProductImage,
  ContainerText,
  ProductName,
  ProductPrice
} from './styles'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()

  const handleAddToCart = () => {
    putProductInCart(product)
    toast.success('Item added to cart successfully', {
      autoClose: 1000,
      theme: 'dark'
    })
  }
  return (
    <Container>
      <ProductImage src={product.url} alt="product-image" />
      <ContainerText>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </ContainerText>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
