import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import RegisterImg from '../../assets/signup-body.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  RegisterImage,
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

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string('Please inform your name.').required(
      'The name is required.'
    ),
    email: Yup.string()
      .email('Please inform a valid e-mail.')
      .required('The e-email is required.'),
    password: Yup.string().required('The password is required.'),
    confirmPassword: Yup.string()
      .required('You must confirm your password.')
      .oneOf([Yup.ref('password')], 'The passwords must match.')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async clientData => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password,
      confirmPassword: clientData.confirmPassword
    })
    console.log(response)
  }
  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="login-image" />

      <ContainerItems>
        <HeaderName>JoJo&apos;s</HeaderName>
        <HeaderBurger>Burger</HeaderBurger>

        <H1Login>Register</H1Login>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Name</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
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
          <Label>Confirm Password</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button
            type="submit"
            style={{ marginTop: '1.875rem', marginBottom: '1.8125rem' }}
          >
            Sign Up
          </Button>
        </form>
        <SignInLink>
          Already have an account? <a>Sign in!</a>{' '}
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Register
