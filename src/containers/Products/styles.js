import styled from 'styled-components'

export const Container = styled.div`
  background-color: #080806;
  min-height: calc(100vh - 80px);
`

export const CoverImg = styled.img`
  width: 100%;
`

export const ContainerCategory = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #fbeee0;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
  color: ${props => (props.isActiveCategory ? '#fbeee0' : '#9a9a9d')};
  border-bottom: ${props => props.isActiveCategory && '2px solid #fbeee0'};
`

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  margin-top: 20px;
  justify-items: center;
`
