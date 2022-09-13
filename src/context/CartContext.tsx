import { produce } from 'immer'

import { createContext, ReactNode, useReducer } from "react";
import { Coffee } from "../pages/Home";

export interface CoffeeCart extends Coffee {
  quantity: number;
}

interface CartContextType {
  coffees: CoffeeCart[];
  subTotal: number;
  delivery: number;
  total: number;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode;
}

function cartReducer(state: CartContextType, action: any) {
  return produce(state, (draft) => {
    draft.coffees.push(),
    draft.total = 0,
    draft.subTotal = 0,
    draft.delivery = 0
  })
}

export function CartContexProvider({children}: CartContextProviderProps) {
  // let cart: CartContextType;

  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
    total: 0,
    subTotal: 0,
    delivery: 0
  })

  const {coffees, delivery, subTotal, total} = cartState
  
  return(
    <CartContext.Provider
      value={{coffees, delivery, subTotal, total}}
    >
      {children}
    </CartContext.Provider>
  )
}