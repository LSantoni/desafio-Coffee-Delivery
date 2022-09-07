import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 75rem;
  height: 100vh;
  padding: 0 10rem;

  margin: 0 auto;

  background: ${props => props.theme.background};

  display: flex;
  flex-direction: column;
`;