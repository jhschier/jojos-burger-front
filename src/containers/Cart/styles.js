import styled from 'styled-components'

export const Container = styled.div`
  background-color: #080806;
  min-height: calc(100vh - 80px);
`

export const CoverImg = styled.img`
  width: 100%;
  border-bottom: 1px solid #fbeee0;
  margin-bottom: 10px;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1215px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`
