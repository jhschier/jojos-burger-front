import React from 'react'
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
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/products')}
          isActive={pathname.includes('/products')}
        >
          Products
        </PageLink>
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
