import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #fbeee0;

  p {
    font-family: 'Merienda', cursive;
    font-size: 17px;
    color: #422800;
    padding: 1px;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;

  grid-gap: 10px 15px;

  p {
    font-family: 'Merienda', cursive;
    font-size: 15px;
    color: #422800;
    padding: 1px;
    margin-top: 3px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
  }
`

export const ProductImage = styled.img`
  width: 130px;
  border-radius: 10px;
`

export const ImageContainer = styled.div`
  max-width: 130px;
`
export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-family: 'Merienda', cursive;
  font-size: 15px;
  font-weight: bold;
  color: #422800;
`
