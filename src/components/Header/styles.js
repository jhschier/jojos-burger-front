import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fbeee0;
  height: 72px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #422800;
  font-size: 16px;
  line-height: 19px;
  border-bottom: ${props => (props.isActive ? '1px solid #422800' : 'none')};
  &:hover {
    font-size: 17px;
    transition: 0.2s ease-in-out;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #422800;
  }
`

export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #000;
`

export const PageLinkExit = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    font-size: 15px;
    transition: 0.2s ease-in;
  }
`
