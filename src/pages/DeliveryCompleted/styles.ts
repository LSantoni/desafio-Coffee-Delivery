import styled from "styled-components";

export const DesliveryCompletedContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  svg {
    max-width: 30.75rem;
  }
`

export const Content = styled.div`
  max-width: 32.875rem;

  h1 {
    color: ${props => props.theme["yellow-dark"]};
    font-size: 2rem;
    font-weight: 800;
  }

  h2 {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
`

export const DeliveryInfoContainer = styled.div`
  margin-top: 2.5rem;
  border-radius: 6px 36px;
  position: relative;
  background: linear-gradient(to right, ${props => props.theme.yellow}, ${props => props.theme.purple});
  padding: 3px;

  #border-background {
    border-radius: 3px 33px;
    background: ${props => props.theme.background};

    padding: 2.5rem;
  }
`

const COFFEE_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple'
} as const

interface DeliveryInfoProps {
  coffeeColors: keyof typeof COFFEE_COLORS
}

export const DeliveryInfo = styled.div<DeliveryInfoProps>`
  display: flex;
  gap: 0.75rem;
  line-height: 20.8px;

  svg {
    height: 2rem;
    width: 2rem;
    padding: 0.25rem;
    background: ${props => props.theme[COFFEE_COLORS[props.coffeeColors]]};
    color: ${props => props.theme.white};
    border-radius: 50%;
  }

  & + div{
    margin-top: 2rem;
  }

  span {
    font-weight: 700;
  }
`