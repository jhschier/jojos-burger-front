import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-body.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  LoginImage,
  Container,
  ContainerItems,
  HeaderName,
  HeaderBurger,
  H1Login,
  Label,
  Input,
  ErrorMessage,
  SignInLink
} from './styles'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Please inform a valid e-mail.')
      .required('The e-email is required.'),
    password: Yup.string().required('The password is required.')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async clientData => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />

      <ContainerItems>
        <HeaderName>JoJo&apos;s</HeaderName>
        <HeaderBurger>Burger</HeaderBurger>

        <H1Login>Login</H1Login>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Password</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button
            type="submit"
            style={{ marginTop: '4.1875rem', marginBottom: '1.8125rem' }}
          >
            Sign In
          </Button>
        </form>
        <SignInLink>
          Don&apos;t have an account? <a>Sign Up!</a>{' '}
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
