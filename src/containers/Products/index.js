import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import ProductsCover from '../../assets/productsCover.jpg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  CategoryButton,
  Container,
  CoverImg,
  ContainerCategory,
  ContainerProducts
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProdutcs] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'All' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }
    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProdutcs(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setFilteredProdutcs(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
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
      <ContainerProducts>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ContainerProducts>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
