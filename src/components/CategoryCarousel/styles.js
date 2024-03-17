import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  padding-bottom: 35px;
  background-color: #080806;
  border-bottom: 1px solid #fbeee0;
  border-top: 1px solid #fbeee0;

  .rec.rec-arrow {
    opacity: 0.8;
    background-color: #fbeee0;
  }
  .rec.rec-arrow:hover {
    border: 2px solid #fbeee0;
    background-color: #422800;
    color: #fbeee0;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  .rec.rec-pagination {
    visibility: hidden;
  }
`

export const ContainerItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-direction: column;
`

export const Image = styled.img`
  width: 150px;
  height: 110px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  margin: 5px 5px;
  color: #422800;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  font-size: 18px;
  font-family: 'Merienda', cursive;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  @media (min-width: 1215px) {
    & {
      min-width: 90px;
      padding: 0 25px;
    }
  }
`

export const H2Categories = styled.h2`
  font-family: 'Merienda', cursive;
  font-size: 50px;
  margin: 10px;
  text-align: center;
  color: #fbeee0;

  @media (max-width: 1215px) {
    font-size: 30px;
  }
`
