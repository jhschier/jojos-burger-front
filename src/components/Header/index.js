import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import CartLogo from '../../assets/cart.png'
import UserLogo from '../../assets/user.png'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerText,
  PageLink,
  PageLinkExit,
  Line
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const [anchorEl, setAnchorEL] = useState(null)

  const handleClickIcon = event => {
    setAnchorEL(event.currentTarget)
  }

  const handleCloseIcon = () => {
    setAnchorEL(null)
  }

  const logoutUser = () => {
    logout()
    push('/login')
  }

  const handleAdminClick = () => {
    if (userData.admin) {
      push('/orders')
    }
  }

  return (
    <Container>
      <ContainerLeft>
        {window.innerWidth > 950 ? (
          <>
            <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
              Home
            </PageLink>
            <PageLink
              onClick={() => push('/products')}
              isActive={pathname.includes('/products')}
            >
              Products
            </PageLink>
          </>
        ) : (
          <>
            <IconButton
              aria-label="menu"
              aria-controls="basic-menu"
              aria-haspopup="true"
              onClick={handleClickIcon}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseIcon}
              slotProps={{
                paper: {
                  style: {
                    backgroundColor: '#fbeee0'
                  }
                }
              }}
            >
              <MenuItem onClick={() => push('/')}>Home</MenuItem>
              <MenuItem onClick={() => push('/products')}>Products</MenuItem>
            </Menu>
          </>
        )}
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <img
            src={CartLogo}
            onClick={() => push('/cart')}
            style={{ width: '25px' }}
            alt="cart-logo"
          />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img
            src={UserLogo}
            style={{ width: '25px' }}
            alt="user-logo"
            onClick={handleAdminClick}
          />
        </PageLink>
        <ContainerText>
          <p>Welcome {userData.name}!</p>
          <PageLinkExit onClick={logoutUser}>Logout</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
