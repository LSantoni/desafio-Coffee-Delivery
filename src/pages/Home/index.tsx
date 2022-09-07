import { HomeContainer, HomeHeader } from "./styles";

import coffeeLogo from '../../assets/icons/home.svg';
import { ShoppingCart, Timer, Coffee, Package } from "phosphor-react";

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <div id="teste">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <div>
            <div>
              <span>
                <ShoppingCart size={20} /> 
              </span>
              Compra simples e segura
            </div>
            <div>
              <span>
                <Package size={20} />
              </span>
              Embalagem mantém o café intacto
            </div>
            <div>
              <span>
                <Timer size={20} />
              </span>
              Entrega rápida e rastreada
            </div>
            <div>
              <span>
                <Coffee size={20} />
              </span>
              O café chega fresquinho até você
            </div>
          </div>
        </div>
        <img src={coffeeLogo} alt="" />
      </HomeHeader>
    </HomeContainer>
  )
}