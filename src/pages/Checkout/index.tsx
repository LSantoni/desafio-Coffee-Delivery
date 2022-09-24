import { AddressContainer, CartItem, CartItemDescription, CartItemDescriptionButtons, CartSummary, CheckoutContainer, ClienteData, CoffeeData, ConfirmButton, InputS1, InputS2, InputS3, InputS4, InputS5, PaymentContainer, PaymentSelect } from "./styles";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank, Minus, Plus, Trash } from "phosphor-react"

const imagePath = 'src/assets/coffees/';

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Checkout() {
  const { register, handleSubmit, reset } = useForm()
  const { coffees, cartSubTotal, addCoffeeInCart, withDrawCoffeeInCart, addResumeInfo, calculatePrice, clearCart } = useContext(CartContext);

  const deliveryPrice = 3.50;
  const cartTotal = calculatePrice() + deliveryPrice;

  const navigate = useNavigate();

  function handleCreateNewAddress(data: any) {
    addResumeInfo(data);
    reset();
    clearCart();

    navigate('/resume')
  }

  function handleAddCoffee(coffeeTitle: string) {
    addCoffeeInCart(coffeeTitle)
  }

  function handleWithDrawCoffee(coffeeTitle: string) {
    withDrawCoffeeInCart(coffeeTitle)
  }

  function showCoffeeQuantity(coffeeTitle: string) {
    const quantity = coffees.find(coffee => coffee.title === coffeeTitle)?.quantity;

    if(!quantity) {
      return 0
    }

    return quantity
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewAddress)} action="">
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
              <InputS2 
                type="text" 
                placeholder="CEP" 
                {...register('zipCode')} 
              />
              <InputS5 
                type="text" 
                placeholder="Rua"
                {...register('address')} 
              />
              <InputS2 
                type="number" 
                placeholder="Número"
                {...register('number', { valueAsNumber: true })}
              />
              <InputS4 
                type="text" 
                placeholder="Complemento"
                {...register('complement')}
              />
              <InputS2 
                type="text" 
                placeholder="Bairro"
                {...register('district')}
              />
              <InputS3 
                type="text" 
                placeholder="Cidade"
                {...register('city')}
              />
              <InputS1 
                type="text" 
                placeholder="UF"
                maxLength={2}
                {...register('state')}
              />
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
              <input
                type="radio" 
                id="cred"
                value="Cartão de Crédito"
                {...register('payment')}
              />
              <label htmlFor="cred">
                <CreditCard size={20} />
                CARTÃO DE CRÉDITO
              </label>
              <input 
                type="radio"
                id="deb"
                value="Cartão de Débito"
                {...register('payment')}
              />
              <label htmlFor="deb">
                <Bank size={20} />
                CARTÃO DE DÉBITO
              </label>
              <input 
                type="radio"
                id="din"
                value="Dinheiro"
                {...register('payment')}
              />
              <label htmlFor="din">
                <Money size={20} />
                DINHEIRO
              </label>
            </PaymentSelect>
          </PaymentContainer>
        </ClienteData>
        <div>
          <header>Cafés selecionados</header>
          <CoffeeData>
            {
              coffees.map(coffee => {
                return (
                  <CartItem key={coffee.title}>
                    <img src={imagePath+coffee.url} alt="" />
                    <CartItemDescription>
                      <p>Expresso Tradicional</p>
                      <div>
                        <CartItemDescriptionButtons>
                          <button type="button" onClick={() => handleWithDrawCoffee(coffee.title)}>
                            <Minus size={14} />
                          </button>
                          <span>{showCoffeeQuantity(coffee.title)}</span>
                          <button type="button" onClick={() => handleAddCoffee(coffee.title)}>
                            <Plus size={14} />
                          </button>
                        </CartItemDescriptionButtons>
                        <span id="btn-remove">
                          <Trash size={16} />
                          REMOVER
                        </span>
                      </div>
                    </CartItemDescription>
                    {coffee.price}
                  </CartItem>
                )
              })
            }          
            <CartSummary>
              <div>
                <p>Total de itens</p>
                <p>{calculatePrice()}</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>{deliveryPrice}</p>
              </div>
              <div id="total">
                <p>Total</p>
                <p>{cartTotal}</p>
              </div>
            </CartSummary>
            <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
          </CoffeeData>
        </div>
      </form>
    </CheckoutContainer>
  )
}