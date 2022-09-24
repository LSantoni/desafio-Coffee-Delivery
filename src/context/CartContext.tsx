import { createContext, ReactNode, useReducer, useState } from "react";
import { Coffee, coffeeList } from '../shared/utils/coffeeList';

export interface CoffeeCart extends Coffee {
  quantity: number;
}

export interface ResumeInfo {
  zipCode: string;
  address: string;
  number: number;
  complemento: string;
  district: string;
  city: string;
  state: string;
  payment: string;
}

interface CartContextType {
  coffees: CoffeeCart[];
  addCoffeeInCart: (title: string) => void;
  withDrawCoffeeInCart: (title: string) => void;
  cartQuantity: number;
  cartSubTotal: number;
  addResumeInfo: (data: ResumeInfo) => void;
  resume: ResumeInfo | undefined;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContexProvider({children}: CartContextProviderProps) {
  
  const [coffees, setCoffees] = useState<CoffeeCart[]>([])
  const [resume, setResume] = useState<ResumeInfo>()
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

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

  function addResumeInfo(data: ResumeInfo) {
    setResume(data);
  }
  
  return(
    <CartContext.Provider
      value={{
        coffees,
        cartQuantity,
        cartSubTotal,
        resume,
        addResumeInfo,
        addCoffeeInCart,
        withDrawCoffeeInCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}