import styled from "styled-components";

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  
  form {
    display: flex;
    flex: 1;
    justify-content: space-between;
    gap: 2rem;
  }
`

export const ClienteData = styled.div`
  max-width: 40rem;
  width: 100%;

  #page-header {
    color: ${props => props.theme["base-subtitle"]};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const CoffeeData = styled.div`
  max-width: 28rem;
  width: 100%;

  padding: 2.5rem;

  background: ${props => props.theme["base-card"]};

  border-radius: 6px 44px;
`

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme["base-button"]};
  margin-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;

    margin-right: 1.25rem;
  }
`

export const CartItemDescription = styled.div`

  p {
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    gap: 0.5rem;

    border-radius: 6px;

    span {
      background: ${props => props.theme["base-button"]};

      font-size: 0.75rem;
      color: ${props => props.theme["base-text"]};

      svg {
        color: ${props => props.theme["purple"]};
        vertical-align: middle;
      }
    }
  }

  #btn-remove {
    border-radius: 6px;
    padding: 0.5rem;
  }
`

export const CartItemDescriptionButtons = styled.div`
  background: ${props => props.theme["base-button"]};
  padding: 0.5rem;

  button {
    border: none;
    color: ${props => props.theme["purple"]};
    background: transparent;
    display: flex;
  }
`