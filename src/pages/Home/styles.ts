import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  line-height: 1.3;
`

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;

  font-weight: 800;
  font-size: 24px;

  h1 {
    font-size: 38px;
  }

  div {
    max-width: 36.75rem;
  }

  #home-title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    max-width: 23.75rem;
    max-height: 22.5rem;
  }

  svg {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 5px;
  }
`

export const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.theme["base-text"]};
  
  span, svg {
    align-self: center;
  }
`

const COFFEE_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  dark_gray: 'base-text',
  purple: 'purple'
} as const

interface HomeHeaderProps {
  coffeeColors: keyof typeof COFFEE_COLORS
}

export const CoffeeDescription = styled.div<HomeHeaderProps>`
  display: flex;
  gap: 12px;

  svg {
    background: ${props => props.theme[COFFEE_COLORS[props.coffeeColors]]};
    color: ${props => props.theme.white};
  }
`

export const CoffeeListContainer = styled.div`
  header {
    margin: 2rem 0 3.375rem 0;
  }

  #list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`

export const CoffeeList = styled.div`
  background: ${props => props.theme["base-card"]};
  
  max-width: 16rem;
  max-height: 19.375rem;

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -25px;
    width: 7.5rem;
    height: 7.5rem;
  }

  div {
    margin: 0.75rem 0 1rem 0;
    gap: 0.25rem;

    #features {
      background: ${props => props.theme["yellow-light"]};
      color: ${props => props.theme["yellow-dark"]};
      padding: 0.25rem 0.5rem;
      border-radius: 100px;

      & + span {
        margin-left: 0.25rem;
      }
    }
  }

  header {
    margin: 0 0 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
    text-align: center;
    margin: 0 1.25rem;
  }
`

export const CoffeeValueContainer = styled.section`
  display: flex;
  margin: 2.0625rem 1.5rem 1.25rem;
  gap: 1rem;

  span {
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${props => props.theme["base-text"]};

    h2 {
      font-size: 1.5rem;
      font-family: 'Baloo 2', serif;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;

    background: ${props => props.theme["base-button"]};

    button {
      border: none;
      color: ${props => props.theme["purple"]};
      background: transparent;
      display: flex;
    }
  }

  a {
      color: ${props => props.theme.white};
      background: ${props => props.theme["purple-dark"]};
      border-radius: 6px;
      padding: 0.5rem;
      width: 2.375rem;
      height: 2.375rem;
      align-self: center;

      :hover {
        background: ${props => props.theme["purple"]};
      }
  }
`