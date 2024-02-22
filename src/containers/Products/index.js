import React, { useEffect, useState } from 'react'

import ProductsCover from '../../assets/productsCover.jpg'
import CardProduct from '../../components/CardProduct'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  CategoryButton,
  Container,
  CoverImg,
  ContainerCategory,
  ContainerProducts
} from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState([0])

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
      <ContainerProducts>
        {products &&
          products.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ContainerProducts>
    </Container>
  )
}

export default Products
