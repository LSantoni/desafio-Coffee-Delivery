import { CartItem, CartItemDescription, CartItemDescriptionButtons, CheckoutContainer, ClienteData, CoffeeData } from "./styles";

import { MapPinLine, MapPin, CurrencyDollar, CreditCard, Money, Bank, Minus, Plus, Trash } from "phosphor-react"

import tradicional from '../../assets/coffees/traditional.svg'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="">
        <ClienteData>
          <header id="page-header">Complete seu pedido</header>
          <div>
            <header>
              <MapPinLine size={20} />
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </header>
            <div>
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
            </div>
          </div>
          <div>
            <header>
              <CurrencyDollar size={20} />
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja  pagar</p>
            </header>
            <div>
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
            </div>
          </div>
        </ClienteData>
        <CoffeeData>
          <header>Cafés selecionados</header>
          <div>
            <CartItem>
              <img src={tradicional} alt="" />
              <CartItemDescription>
                <p>Expresso Tradicional</p>
                <div>
                  <CartItemDescriptionButtons>
                    <button /*onClick={() => handleWithDrawCoffee(coffee.title)}*/>
                      <Minus size={14} />
                    </button>
                    <span>{1/*showCoffeeQuantity(coffee.title)*/}</span>
                    <button /*onClick={() => handleAddCoffee(coffee.title)}*/>
                      <Plus size={14} />
                    </button>
                  </CartItemDescriptionButtons>
                  <span id="btn-remove">
                    <Trash size={16} />
                    REMOVER
                  </span>
                </div>
              </CartItemDescription>
              R$ 9,90
            </CartItem>
            <CartItem>
              <img src={tradicional} alt="" />
              <CartItemDescription>
                <p>Expresso Tradicional</p>
                <div>
                  <CartItemDescriptionButtons>
                    <button /*onClick={() => handleWithDrawCoffee(coffee.title)}*/>
                      <Minus size={14} />
                    </button>
                    <span>{1/*showCoffeeQuantity(coffee.title)*/}</span>
                    <button /*onClick={() => handleAddCoffee(coffee.title)}*/>
                      <Plus size={14} />
                    </button>
                  </CartItemDescriptionButtons>
                  <span id="btn-remove">
                    <Trash size={16} />
                    REMOVER
                  </span>
                </div>
              </CartItemDescription>
              R$ 9,90
            </CartItem>
            <CartItem>
              <img src={tradicional} alt="" />
              <CartItemDescription>
                <p>Expresso Tradicional</p>
                <div>
                  <CartItemDescriptionButtons>
                    <button /*onClick={() => handleWithDrawCoffee(coffee.title)}*/>
                      <Minus size={14} />
                    </button>
                    <span>{1/*showCoffeeQuantity(coffee.title)*/}</span>
                    <button /*onClick={() => handleAddCoffee(coffee.title)}*/>
                      <Plus size={14} />
                    </button>
                  </CartItemDescriptionButtons>
                  <span id="btn-remove">
                    <Trash size={16} />
                    REMOVER
                  </span>
                </div>
              </CartItemDescription>
              R$ 9,90
            </CartItem>
            <div>
              Total de itens
              R$ 29,70
            </div>
            <div>
              Entrega
              R$ 3,50
            </div>
            <div>
              Total
              R$ 33,20
            </div>
            <button>Confirmar Pedido</button>
          </div>
        </CoffeeData>
      </form>
    </CheckoutContainer>
  )
}