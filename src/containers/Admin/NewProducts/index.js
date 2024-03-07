import React, { useEffect } from 'react'

import api from '../../../services/api'
import { Container } from './styles'

export function NewProduct() {
  useEffect(() => {
    async function createProduct() {
      const { data } = await api.post('products')
    }
    createProduct()
  }, [])
  return (
    <Container>
      <div>Oi!</div>
    </Container>
  )
}

export default NewProduct
