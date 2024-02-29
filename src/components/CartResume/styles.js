import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ede8d5;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p,
  h2 {
    font-family: 'Merienda', cursive;
    color: #422800;
    padding: 1px;
  }

  .container-top {
    display: grid;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-fee delivery-price';

    grid-gap: 10px 50px;

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .delivery-fee {
      grid-area: delivery-fee;
    }

    .delivery-price {
      grid-area: delivery-price;
    }

    border-bottom: 1px solid #422800;
  }

  .container-bot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 25px;
    margin-top: 50px;
  }
`
