import React, { useEffect } from 'react'

import api from '../../services/api'
import { Container } from './styles'

function CategoryCarousel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories')
      console.log(response)
    }
    loadCategories()
  }, [])
  return (
    <Container>
      <h2>Categories</h2>
    </Container>
  )
}

export default CategoryCarousel
