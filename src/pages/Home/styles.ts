import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  line-height: 1.3;
`

export const Content = styled.div`
  
`

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;

  font-weight: 800;
  font-size: 24px;

  div {
    max-width: 36.75rem;
  }

  img {
    max-width: 25rem;
    max-height: 22.5rem;
  }
`