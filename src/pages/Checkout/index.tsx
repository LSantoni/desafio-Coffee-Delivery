import { AddressContainer, CartItem, CartItemDescription, CartItemDescriptionButtons, CartSummary, CheckoutContainer, ClienteData, CoffeeData, ConfirmButton, InputS1, InputS2, InputS3, InputS4, InputS5, PaymentContainer, PaymentSelect } from "./styles";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank, Minus, Plus, Trash } from "phosphor-react"

const imagePath = 'src/assets/coffees/';

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// const newAddressFormValidationSchema = zod.object({
//   zipCode: zod.string().min(8, 'Informe um CEP válido'),
//   address: zod.string().min(1, 'Informe um endereço válido'),
//   number: zod.number().min(0, 'O número deve ser maior que 0'),
//   complement: zod.string(),
//   district: zod.string().min(1, 'Informe seu bairro'),
//   city: zod.string().min(1, 'Informe sua cidade'),
//   state: zod.string().min(2, 'Informe seu bairro'),
//   payment: zod.string().min(1, 'Informe o método de pagamento'),
// })

export function Checkout() {
  const { register, handleSubmit, reset } = useForm();
  // const { register, handleSubmit, reset } = useForm({
  //   resolver: zodResolver(newAddressFormValidationSchema),
  // })
  const { coffees, addCoffeeInCart, withDrawCoffeeInCart, 
          addResumeInfo, calculatePrice, clearCart, removeCoffeeOfCart
        } = useContext(CartContext);

  const deliveryPrice = coffees.length > 0 ? 3.50 : 0;
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

  function handleRemoveCartItem(coffeeTitle: string) {
    removeCoffeeOfCart(coffeeTitle);
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
                {...register('zipCode', { required: true })} 
              />
              <InputS5 
                type="text" 
                placeholder="Rua"
                {...register('address', { required: true })} 
              />
              <InputS2 
                type="number" 
                placeholder="Número"
                {...register('number', { valueAsNumber: true, required: true })}
              />
              <InputS4 
                type="text" 
                placeholder="Complemento"
                {...register('complement')}
              />
              <InputS2 
                type="text" 
                placeholder="Bairro"
                {...register('district', { required: true })}
              />
              <InputS3 
                type="text" 
                placeholder="Cidade"
                {...register('city', { required: true })}
              />
              <InputS1 
                type="text" 
                placeholder="UF"
                maxLength={2}
                {...register('state', { required: true })}
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
                {...register('payment', { required: true })}
              />
              <label htmlFor="cred">
                <CreditCard size={20} />
                CARTÃO DE CRÉDITO
              </label>
              <input 
                type="radio"
                id="deb"
                value="Cartão de Débito"
                {...register('payment', { required: true })}
              />
              <label htmlFor="deb">
                <Bank size={20} />
                CARTÃO DE DÉBITO
              </label>
              <input 
                type="radio"
                id="din"
                value="Dinheiro"
                {...register('payment', { required: true })}
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
                        <span id="btn-remove" onClick={() => handleRemoveCartItem(coffee.title)}>
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