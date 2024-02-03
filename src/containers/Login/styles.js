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

  form {
    display: flex;
    flex-direction: column;
  }
`
export const ErrorMessage = styled.p`
  color: #cc1717;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  margin-bottom: 0.625rem;
`

export const JoJosLogo = styled.img``

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
  font-size: 50px;
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
  margin-top: 0.3125rem;
  margin-bottom: 0.3125rem;
  border-radius: 0.3125rem;
  border: ${props => (props.error ? '1px solid #cc1717' : 'none')};
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
