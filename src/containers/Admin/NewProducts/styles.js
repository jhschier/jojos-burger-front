import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 5px;
    padding: 30px;
  }
`

export const Label = styled.p`
  font-size: 15px;
  color: #ffffff;
  margin-bottom: 5px;
`

export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
  width: 100%;
`

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  height: 30px;
`
