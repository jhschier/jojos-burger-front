import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`

export const Label = styled.p`
  font-size: 15px;
  color: #ffffff;
`

export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);

  width: 100%;
  min-width: 280px;
  padding-left: 5px;
`

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  height: 30px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;

  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;

  height: 50px;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`
