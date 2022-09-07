import styled from "styled-components";

export const HeaderConteiner = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      width: 2.375rem;
      height: 2.375rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${props => props.theme["yellow-dark"]};
      background: ${props => props.theme["yellow-light"]};

      border-radius: 6px;
    }

    span {
      height: 2.375rem;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;

      color: ${props => props.theme["purple-dark"]};
      background: ${props => props.theme["purple-light"]};

      border-radius: 6px;
    }
  }
`