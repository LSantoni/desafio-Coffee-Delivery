import { AddressContainer, CartItem, CartItemDescription, CartItemDescriptionButtons, CartSummary, CheckoutContainer, ClienteData, CoffeeData, ConfirmButton, InputS1, InputS2, InputS3, InputS4, InputS5, PaymentContainer, PaymentSelect } from "./styles";

import { MapPinLine, MapPin, CurrencyDollar, CreditCard, Money, Bank, Minus, Plus, Trash } from "phosphor-react"

import tradicional from '../../assets/coffees/traditional.svg'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="">
        <ClienteData>
          <header id="page-header">Complete seu pedido</header>
          <AddressContainer>
            <header>
              <MapPinLine size={20} />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <div>
              <InputS2 type="text" placeholder="CEP" />
              <InputS5 type="text" placeholder="Rua" />
              <InputS2 type="text" placeholder="Número" />
              <InputS4 type="text" placeholder="Complemento" />
              <InputS2 type="text" placeholder="Bairro" />
              <InputS3 type="text" placeholder="Cidade" />
              <InputS1 type="text" placeholder="UF" />
            </div>
          </AddressContainer>
          <PaymentContainer>
            <header>
              <CurrencyDollar size={20} />
              <div>
                <p>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja  pagar</p>
              </div>
            </header>
            <PaymentSelect>
              <input type="radio" name="credito" id="cred" checked={true} />
              <div>
                <CreditCard size={20} />
                CARTÃO DE CRÉDITO
              </div>
              <input type="radio" name="debito" id="deb" />
              <div>
                <Bank size={20} />
                CARTÃO DE DÉBITO
              </div>
              <input type="radio" name="dinheiro" id="din" />
              <div>
                <Money size={20} />
                DINHEIRO
              </div>
            </PaymentSelect>
          </PaymentContainer>
        </ClienteData>
        <div>
          <header>Cafés selecionados</header>
          <CoffeeData>
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
            <CartSummary>
              <div>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </div>
              <div id="total">
                <p>Total</p>
                <p>R$ 33,20</p>
              </div>
            </CartSummary>
            <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
          </CoffeeData>
        </div>
      </form>
    </CheckoutContainer>
  )
}