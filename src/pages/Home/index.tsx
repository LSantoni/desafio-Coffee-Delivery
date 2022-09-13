import { CoffeeContainer, CoffeeDescription, CoffeeList, CoffeeListContainer, CoffeeValueContainer, HomeContainer, HomeHeader } from "./styles";

import coffeeLogo from '../../assets/icons/home.svg';
import { ShoppingCart, Timer, Coffee, Package, Plus, Minus } from "phosphor-react";
import { useContext, useState } from "react";

import { CartContext, CoffeeCart } from "../../context/CartContext";
import { coffeeList } from "../../shared/utils/coffeeList";

const imagePath = 'src/assets/coffees/';





export function Home() {
  const { coffees, addCoffeeInCart, withDrawCoffeeInCart } = useContext(CartContext)
  
  function handleAddCoffee(coffeeTitle: string) {
    addCoffeeInCart(coffeeTitle)
  }

  function handleWithDrawCoffee(coffeeTitle: string) {
    withDrawCoffeeInCart(coffeeTitle)
  }

  function showCoffeeQuantity(coffeeTitle: string) {
    const quantity = coffees.find(coffee => coffee.title === coffeeTitle)?.quantity;

    console.log(coffees)

    if(!quantity) {
      return 0
    }

    return quantity
  }

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
      <CoffeeListContainer>
        <header>
          Nossos cafés
        </header>
        <div id="list">
          {
            coffeeList.map(coffee => {
              return(
                <CoffeeList key={coffee.title}>
                  <img src={imagePath+coffee.url} alt="" />
                  <div>
                      {coffee.features.map(feature => {
                        return <span id="features">
                          { feature }
                        </span>
                      })}
                  </div>
                  <header>
                    {coffee.title}
                  </header>
                  <p>{coffee.description}</p>
                  <CoffeeValueContainer>
                    <span>R$ <h2>{coffee.price}</h2></span>
                    <div>
                      <button onClick={() => handleWithDrawCoffee(coffee.title)}>
                        <Minus size={14} />
                      </button>
                      <span>{showCoffeeQuantity(coffee.title)}</span>
                      <button onClick={() => handleAddCoffee(coffee.title)}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <a href="">
                      <ShoppingCart size={20} />
                    </a>
                  </CoffeeValueContainer>
                </CoffeeList>
              )
            })
          }
        </div>
      </CoffeeListContainer>
    </HomeContainer>
  )
}