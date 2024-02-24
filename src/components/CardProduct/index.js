import PropTypes from 'prop-types'
import React from 'react'

import { Button } from '../Button'
import {
  Container,
  ProductImage,
  ContainerText,
  ProductName,
  ProductPrice
} from './styles'

export function CardProduct({ product }) {
  return (
    <Container>
      <ProductImage src={product.url} alt="product-image" />
      <ContainerText>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button>Add to cart</Button>
      </ContainerText>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
