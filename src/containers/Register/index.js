import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { toast, Bounce } from 'react-toastify'
import * as Yup from 'yup'

import bgHome from '../../assets/bg-home.jpg'
import RegisterImg from '../../assets/signup-body.svg'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api'
import {
  RegisterImage,
  Container,
  ContainerItems,
  HeaderName,
  HeaderBurger,
  H1Register,
  Label,
  Input,
  SignInLink
} from './styles'

export function Register() {
  const { push } = useHistory()
  const schema = Yup.object().shape({
    name: Yup.string('Please inform your name.').required(
      'The name is required.'
    ),
    email: Yup.string()
      .email('Please inform a valid e-mail.')
      .required('The e-email is required.'),
    password: Yup.string()
      .min(6, 'The password must contain at least 6 characters.')
      .required('The password is required.'),
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
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
          confirmPassword: clientData.confirmPassword
        },
        { validateStatus: () => true }
      )

      if (status === 200 || status === 201) {
        toast.success('Signed up successfully!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Bounce
        })
        setTimeout(() => {
          push('/login')
        }, 2000)
      } else if (status === 409) {
        toast.error('This e-mail is already in use!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Bounce
        })
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('An error occurred. Please try again later.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce
      })
    }
  }
  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="login-image" />

      <ContainerItems
        style={{
          backgroundImage: `url(${bgHome})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <HeaderName>JoJo&apos;s</HeaderName>
        <HeaderBurger>Burger</HeaderBurger>
        <H1Register>Register</H1Register>
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
          Already have an account? <Link to="/login">Sign in!</Link>{' '}
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}
