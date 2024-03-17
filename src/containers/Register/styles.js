import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;

  @media (min-width: 1216px) {
    height: 100vh;
  }
  @media (max-width: 1215px) {
    flex-direction: column;
    align-items: stretch;
  }
`
export const ContainerTitle = styled.div``

export const RegisterImage = styled.img`
  height: 100vh;
  flex: 1;
  object-fit: cover;

  @media (max-width: 1215px) {
    display: none;
  }
`

export const ContainerItems = styled.div`
  background: #000000;
  min-height: 100vh;
  width: 50vw;
  padding: 1.5625rem 230px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1215px) {
    width: 100%;

    padding: 1.5625rem;
  }
`

export const JoJosLogo = styled.img``

export const H1Register = styled.p`
  color: #fbeee0;
  text-align: center;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 6.25rem;
  margin-bottom: 1rem;

  @media (max-width: 1215px) {
    margin-top: 20px;
    font-size: 15px;
    margin-bottom: 0;
  }
`

export const HeaderName = styled.h2`
  font-family: 'Merienda', cursive;
  font-size: 50px;
  text-align: center;
  color: #fbeee0;
  @media (max-width: 1215px) {
    font-size: 30px;
  }
`

export const HeaderBurger = styled.h1`
  font-family: 'Merienda', cursive;
  font-size: 70px;
  text-align: center;
  color: #fbeee0;
  @media (max-width: 1215px) {
    font-size: 50px;
  }
`

export const Label = styled.p`
  font-size: 0.75rem;

  font-weight: 500;
  color: #fbeee0;
  line-height: 0.875rem;
`

export const Input = styled.input`
  height: 2.375rem;
  background-color: #fbeee0;
  margin-top: 0.3125rem;
  margin-bottom: 0.3125rem;
  border-radius: 0.3125rem;
  border: ${props => (props.error ? '1px solid #cc1717' : 'none')};
  padding-left: 0.3125rem;
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

  @media (max-width: 1215px) {
    margin-bottom: 2px;
  }
`
