import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const ContainerTitle = styled.div``

export const LoginImage = styled.img`
  height: 100vh;
  flex: 1;
  object-fit: cover;
`

export const ContainerItems = styled.div`
  background: #000000;
  height: 100vh;
  width: 50vw;
  padding: 1.5625rem 230px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const H1Login = styled.p`
  color: #fff;
  text-align: center;

  font-family: Roboto;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 6.25rem;
  margin-bottom: 1rem;
`

export const HeaderName = styled.h2`
  font-family: 'Merienda', cursive;
  font-size: 3.125rem;
  text-align: center;
  color: #ffffff;
`

export const HeaderBurger = styled.h1`
  font-family: 'Merienda', cursive;
  font-size: 4.375rem;
  text-align: center;
  color: #ffffff;
`

export const Label = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.875rem;
`

export const Input = styled.input`
  height: 2.375rem;
  margin-top: 0.9375rem;
  margin-bottom: 1.5625rem;
  border-radius: 0.3125rem;
  border: none;
  padding-left: 0.3125rem;
`

export const Button = styled.button`
  background-color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  font-style: normal;
  margin-top: 4.1875rem;
  margin-bottom: 1.8125rem;
  width: 11.25rem;
  height: 2.25rem;
  border-radius: 0.9375rem;
  align-self: center;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const SignInLink = styled.p`
  color: #ffffff;
  font-style: normal;
  font-weight: 300;
  font-size: 0.875rem;
  align-self: center;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
