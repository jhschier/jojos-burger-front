import PropTypes from 'prop-types'
import React from 'react'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewCategory from './NewCategory'
import NewProduct from './NewProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'
export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProduct && <NewProduct />}
        {path === paths.EditProduct && <EditProduct />}
        {path === paths.NewCategory && <NewCategory />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
