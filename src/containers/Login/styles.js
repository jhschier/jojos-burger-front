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
  padding: 25px 230px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const H1Login = styled.p`
  color: #fff;
  text-align: center;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 100px;
  margin-bottom: 16px;
`

export const HeaderName = styled.h2`
  font-family: 'Merienda', cursive;
  font-size: 50px;
  text-align: center;
  color: #ffffff;
`

export const HeaderBurger = styled.h1`
  font-family: 'Merienda', cursive;
  font-size: 70px;
  text-align: center;
  color: #ffffff;
`

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  line-height: 14px;
`

export const Input = styled.input`
  height: 38px;

  margin-top: 15px;
  margin-bottom: 25px;
  border-radius: 5px;
`

export const Button = styled.button`
  margin-top: 67px;
  margin-bottom: 29px;
  width: 180px;
  height: 36px;
  border-radius: 15px;
  align-self: center;
`

export const SignInLink = styled.p`
  color: #ffffff;
  align-self: center;
`
