import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify'
import * as Yup from 'yup'

import bgHome from '../../assets/bg-home.jpg'
import LoginImg from '../../assets/login-body.svg'
import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
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
  SignInLink
} from './styles'

export function Login() {
  const { putUserData } = useUser()
  const history = useHistory()

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
    try {
      const { status, data } = await api.post(
        'sessions',
        {
          email: clientData.email,
          password: clientData.password
        },
        {
          validateStatus: () => true
        }
      )

      if (status === 200 || status === 201) {
        toast.success('Welcome! :)', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Bounce
        })

        putUserData(data)
        setInterval(() => {
          if (data.admin) {
            history.push('/orders')
          } else {
            history.push('/')
          }
          history.go(0)
        }, 1500)
      } else if (status === 401) {
        toast.error('Incorrect e-mail or password.', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Bounce
        })
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('An error has occurred. Please try again later.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce
      })
    }
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />

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
          Don&apos;t have an account? <Link to="/register">Sign Up!</Link>{' '}
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}
