import React from 'react'

import CartLogo from '../../assets/cart.png'
import UserLogo from '../../assets/user.png'
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
  return (
    <Container>
      <ContainerLeft>
        <PageLink>Home</PageLink>
        <PageLink>Products</PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <img src={CartLogo} style={{ width: '25px' }} alt="cart-logo" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={UserLogo} style={{ width: '25px' }} alt="user-logo" />
        </PageLink>
        <ContainerText>
          <p>Welcome User!</p>
          <PageLinkExit>Logout</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
