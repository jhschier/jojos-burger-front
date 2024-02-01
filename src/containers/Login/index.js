import React from 'react'

import LoginImg from '../../assets/login-body.svg'
import {
  LoginImage,
  Container,
  ContainerTitle,
  ContainerItems,
  HeaderName,
  HeaderBurger,
  H1Login,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />

      <ContainerItems>
        <ContainerTitle>
          <HeaderName>JoJo&apos;s</HeaderName>
          <HeaderBurger>Burger</HeaderBurger>
        </ContainerTitle>
        <H1Login>Login</H1Login>

        <Label>Email</Label>
        <Input />

        <Label>Password</Label>
        <Input />

        <Button>Sign In</Button>

        <SignInLink>
          Don&apos;t have an account? <a>Sign Up!</a>{' '}
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
