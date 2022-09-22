import { produce } from 'immer'

import { createContext, ReactNode, useReducer, useState } from "react";
import { Coffee, coffeeList } from '../shared/utils/coffeeList';

export interface CoffeeCart extends Coffee {
  quantity: number;
}

interface CartContextType {
  coffees: CoffeeCart[];
  addCoffeeInCart: (title: string) => void;
  withDrawCoffeeInCart: (title: string) => void;
  cartQuantity: number;
  cartSubTotal: number;
  // delivery: number;
  // total: number;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode;
}

// function cartReducer(state: CartContextType, action: any) {
//   return produce(state, (draft) => {
//     draft.coffees.push()
//     // draft.total = 0,
//     // draft.subTotal = 0,
//     // draft.delivery = 0
//   })
// }

export function CartContexProvider({children}: CartContextProviderProps) {
  // let cart: CartContextType;
  const [coffees, setCoffees] = useState<CoffeeCart[]>([])
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  // const [cartState, dispatch] = useReducer(cartReducer, {
  //   coffees: [],
  //   // total: 0,
  //   // subTotal: 0,
  //   // delivery: 0
  // })

  // const {coffees, delivery, subTotal, total} = cartState

  function addCoffeeInCart(coffeeTitle: string) {
    const existCoffee = coffees.find(coffee => coffee.title === coffeeTitle);

    if(existCoffee) {
      coffees.map(coffee => {
        if (coffee.title === coffeeTitle) {
          coffee.quantity += 1;
        }
      })

      setCoffees((state) => [...state])
    }
    else {
      const selectedCoffee = coffeeList.find(coffee => coffee.title === coffeeTitle);

      const newCoffee: CoffeeCart = {
        description: selectedCoffee!.description,
        features: selectedCoffee!.features,
        price: selectedCoffee!.price,
        title: selectedCoffee!.title,
        url: selectedCoffee!.url,
        quantity: 1
      }

      setCoffees((state) => [...state, newCoffee])
    }

    const newQuantity = cartQuantity+1;
    setCartQuantity(newQuantity)

    calculatePrice();
  }

  function withDrawCoffeeInCart(coffeeTitle: string) {
    const existCoffee = coffees.find(coffee => coffee.title === coffeeTitle);

    if(existCoffee) {
      coffees.map(coffee => {
        if (coffee.title === coffeeTitle) {
          if (coffee.quantity > 1) {
            coffee.quantity -= 1;
          }
          else {
            const indice = coffees.indexOf(existCoffee);
            coffees.splice(indice, 1);
          }
        }
      })

      setCoffees((state) => [...state])

      const newQuantity = cartQuantity-1;
      setCartQuantity(newQuantity)

      calculatePrice()

      console.log(coffees)
    }
  }

  function calculatePrice() {
    let subTotalPrice = 0;
    coffees.map(c => {
      subTotalPrice += c.quantity * c.price;
    });

    setCartSubTotal(subTotalPrice);
  }
  
  return(
    <CartContext.Provider
      value={{
        coffees,
        cartQuantity,
        cartSubTotal,
        addCoffeeInCart,
        withDrawCoffeeInCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}