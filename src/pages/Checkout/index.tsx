import { CheckoutContainer, ClienteData, CoffeeData } from "./styles";

import { MapPinLine, MapPin, CurrencyDollar, CreditCard, Money, Bank } from "phosphor-react"

export function Checkout() {
  return (
    <CheckoutContainer>
      <ClienteData>
        <header>Complete seu pedido</header>
        <div>
          <header>
            <MapPinLine size={20} />
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </header>
          <form action="">
            <input type="text" placeholder="CEP" />
            <input type="text" />
            <div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </form>
        </div>
        <div>
          <header>
            <img src="" alt="" />
          </header>
          <div></div>
        </div>
      </ClienteData>
      <CoffeeData>
        <header>Cafés selecionados</header>
        <div>
          <CreditCard size={20} />
          <input type="checkbox" name="" id="" />
          CARTÃO DE CRÉDITO
        </div>
        <div>
          <Bank size={20} />
          <input type="checkbox" name="" id="" />
          CARTÃO DE DÉBITO
        </div>
        <div>
          <Money size={20} />
          <input type="checkbox" name="" id="" />
          DINHEIRO
        </div>
        <div>
          <button>Confirmar Pedido</button>
        </div>
      </CoffeeData>
    </CheckoutContainer>
  )
}