import React, { useEffect, useState } from 'react'

import ProductsCover from '../../assets/productsCover.jpg'
import api from '../../services/api'
import {
  CategoryButton,
  Container,
  CoverImg,
  ContainerCategory
} from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState([0])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'All' }, ...data]
      setCategories(newCategories)
    }
    loadCategories()
  }, [])
  return (
    <Container
      style={{
        backgroundColor: '#000000'
      }}
    >
      <CoverImg src={ProductsCover} />
      <ContainerCategory>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              isActiveCategory={activeCategory === category.id}
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </ContainerCategory>
    </Container>
  )
}

export default Products
