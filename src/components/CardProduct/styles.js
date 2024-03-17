import styled from 'styled-components'

export const Container = styled.div`
  background: #080806;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: max-content;
  @media (max-width: 1215px) {
    max-width: 400px;
  }
`

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`

export const ProductName = styled.p`
  font-family: 'Merienda', cursive;
  font-size: 16px;
  margin: 10px;
  line-height: 20px;
  color: #fbeee0;
`

export const ProductPrice = styled.p`
  font-family: 'Merienda', cursive;
  font-size: 18px;
  margin: 10px;
  line-height: 21px;
  color: #fbeee0;
  margin-top: 50px;
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
