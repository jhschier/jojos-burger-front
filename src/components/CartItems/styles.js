import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ede8d5;
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

  align-items: center;

  p {
    font-family: 'Merienda', cursive;
    font-size: 17px;
    color: #422800;
    padding: 1px;
    @media (max-width: 1215px) {
      font-size: 15px;
    }
  }

  p:nth-child(2),
  p:nth-child(3),
  p:nth-child(4) {
    padding-left: 20px;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;

  grid-gap: 10px 15px;

  align-items: center;

  p {
    font-family: 'Merienda', cursive;
    font-size: 15px;
    color: #422800;
    padding: 1px;
    margin-top: 3px;
    @media (max-width: 1215px) {
      font-size: 12px;
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    img {
      width: 20px;
      margin-left: 40px;

      @media (max-width: 1215px) {
        width: 15px;
        height: 15px;
      }
    }
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

      @media (max-width: 1215px) {
        height: 20px;
        font-size: 16px;
      }
    }
  }
`

export const ProductImage = styled.img`
  width: 130px;
  border-radius: 10px;

  @media (max-width: 1215px) {
    width: 50px;
    height: 50px;
  }
`

export const ImageContainer = styled.div`
  max-width: 130px;

  @media (max-width: 1215px) {
    max-width: 50px;
  }
`
export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-family: 'Merienda', cursive;
  font-size: 15px;
  font-weight: bold;
  color: #422800;
`
export const ContainerEmptyCart = styled.p`
  width: 500px;
`
