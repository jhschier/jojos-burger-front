import React from 'react'
import { useForm } from 'react-hook-form'

import LoginImg from '../../assets/login-body.svg'
import {
  LoginImage,
  Container,
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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => console.log(data)
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />

      <ContainerItems>
        <HeaderName>JoJo&apos;s</HeaderName>
        <HeaderBurger>Burger</HeaderBurger>

        <H1Login>Login</H1Login>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} />

          <Label>Password</Label>
          <Input type="password" {...register('password')} />

          <Button>Sign In</Button>
        </form>
        <SignInLink>
          Don&apos;t have an account? <a>Sign Up!</a>{' '}
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
