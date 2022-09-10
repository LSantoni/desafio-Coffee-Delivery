import { CoffeeContainer, CoffeeDescription, HomeContainer, HomeHeader } from "./styles";

import coffeeLogo from '../../assets/icons/home.svg';
import { ShoppingCart, Timer, Coffee, Package } from "phosphor-react";

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <div id="home-title">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <CoffeeContainer>
            <CoffeeDescription coffeeColors="orange">
              <ShoppingCart size={20} /> 
              <span>
                Compra simples e segura
              </span>
            </CoffeeDescription>
            <CoffeeDescription coffeeColors="dark_gray">
              <Package size={20} />
              <span>
                Embalagem mantém o café intacto
              </span>
            </CoffeeDescription>
            <CoffeeDescription coffeeColors="yellow">
              <Timer size={20} />
              <span>
                Entrega rápida e rastreada
              </span>
            </CoffeeDescription>
            <CoffeeDescription coffeeColors="purple">
              <Coffee size={20} />
              <span>
                O café chega fresquinho até você
              </span>
            </CoffeeDescription>
          </CoffeeContainer>
        </div>
        <img src={coffeeLogo} alt="" />
      </HomeHeader>
    </HomeContainer>
  )
}