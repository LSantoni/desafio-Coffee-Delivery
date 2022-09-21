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

  header {
    color: ${props => props.theme["base-subtitle"]};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const ClientDataBaseContainer = styled.div`
  background: ${props => props.theme["base-card"]};

  header {
    display: flex;
    gap: 0.5rem;

    text-shadow: none;

    p + p {
      color: ${props => props.theme["base-text"]};
    }

    margin-bottom: 2rem;
  }

  padding: 2.5rem;
`

export const AddressContainer = styled(ClientDataBaseContainer)`
  margin-top: 0.9375rem;

  svg {
    color: ${props => props.theme["yellow-dark"]};
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 40rem;
    gap: 0.75rem;
  }
`

const BaseInput = styled.input`
  background: ${props => props.theme["base-input"]};
  height: 2.5rem;
  padding: 0.75rem;

  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;

  :focus {
    outline: 0;
    border: 1px solid ${props => props.theme["yellow-dark"]};
  }
`

export const InputS5 = styled(BaseInput)`
  width: 35rem;
`

export const InputS4 = styled(BaseInput)`
  width: 21.75rem;
`

export const InputS3 = styled(BaseInput)`
  width: 17.25rem;
`

export const InputS2 = styled(BaseInput)`
  width: 12.5rem;
`

export const InputS1 = styled(BaseInput)`
  width: 3.75rem;
`

export const PaymentContainer = styled(ClientDataBaseContainer)`
  margin-top: 0.75rem;

  svg {
    color: ${props => props.theme.purple};
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

export const CartSummary = styled.div`
  div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 0.75rem;
    }

    p {
      color: ${props => props.theme["base-text"]};
    }
  }

  #total {
    p {
      color: ${props => props.theme["base-subtitle"]};
      font-weight: 700;
      font-size: 1.25rem;
    }
  }
`

export const ConfirmButton = styled.button`
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.white};

  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;

  margin: 1.5rem 0 0;

  text-align: center;

  :hover {
    background: ${props => props.theme["yellow-dark"]};
  }
`