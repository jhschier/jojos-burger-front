import AddBoxIcon from '@mui/icons-material/AddBox'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ListIcon from '@mui/icons-material/List'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Orders',
    link: paths.Order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'List Products',
    link: paths.Products,
    icon: ShoppingCartIcon
  },
  {
    id: 3,
    label: 'New Product',
    link: paths.NewProduct,
    icon: AddShoppingCartIcon
  },
  {
    id: 4,
    label: 'List Categories',
    link: paths.Categories,
    icon: ListIcon
  },

  { id: 5, label: 'New Category', link: paths.NewCategory, icon: AddBoxIcon }
]

export default listLinks
