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