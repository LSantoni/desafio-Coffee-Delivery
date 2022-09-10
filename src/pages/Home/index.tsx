import { CoffeeContainer, CoffeeDescription, CoffeeList, CoffeeListContainer, CoffeeValueContainer, HomeContainer, HomeHeader } from "./styles";

import coffeeLogo from '../../assets/icons/home.svg';
import { ShoppingCart, Timer, Coffee, Package, Plus, Minus } from "phosphor-react";

import cafe from '../../assets/coffees/traditional.svg';
import coffee from '../../assets/coffees/latte.svg';
import cubano from '../../assets/coffees/cubano.svg'

export function Home() {
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
          <CoffeeList>
            <img src={cafe} alt="" />
            <div>
              <span id="features">Tradicional</span>
            </div>
            <header>
              Expresso Tadicional
            </header>
            <p>O tradicional café feito com água quente e grãos moidos</p>
            <CoffeeValueContainer>
              <span>R$ <h2>9,90</h2></span>
              <div>
                <button>
                  <Plus size={14} />
                </button>
                <span>1</span>
                <button>
                  <Minus size={14} />
                </button>
              </div>
              <a href="">
                <ShoppingCart size={20} />
              </a>
            </CoffeeValueContainer>
          </CoffeeList>
          <CoffeeList>
            <img src={coffee} alt="" />
            <div>
              <span id="features">Tradicional</span>
              <span id="features">Com Leite</span>
            </div>
            <header>
              Expresso Tadicional
            </header>
            <p>O tradicional café feito com água quente e grãos moidos</p>
            <CoffeeValueContainer>
              <span>R$ <h2>9,90</h2></span>
              <div>
                <button>
                  <Plus size={14} />
                </button>
                <span>1</span>
                <button>
                  <Minus size={14} />
                </button>
              </div>
              <a href="">
                <ShoppingCart size={20} />
              </a>
            </CoffeeValueContainer>
          </CoffeeList>
          <CoffeeList>
            <img src={cubano} alt="" />
            <div>
              <span id="features">Especial</span>
              <span id="features">Alcoólico</span>
              <span id="features">Gelado</span>
            </div>
            <header>
              Expresso Tadicional
            </header>
            <p>O tradicional café feito com água quente e grãos moidos</p>
            <CoffeeValueContainer>
              <span>R$ <h2>9,90</h2></span>
              <div>
                <button>
                  <Plus size={14} />
                </button>
                <span>1</span>
                <button>
                  <Minus size={14} />
                </button>
              </div>
              <a href="">
                <ShoppingCart size={20} />
              </a>
            </CoffeeValueContainer>
          </CoffeeList>
          <CoffeeList>
            <img src={cafe} alt="" />
            <div>
              <span id="features">Tradicional</span>
            </div>
            <header>
              Expresso Tadicional
            </header>
            <p>O tradicional café feito com água quente e grãos moidos</p>
            <CoffeeValueContainer>
              <span>R$ <h2>9,90</h2></span>
              <div>
                <button>
                  <Plus size={14} />
                </button>
                <span>1</span>
                <button>
                  <Minus size={14} />
                </button>
              </div>
              <a href="">
                <ShoppingCart size={20} />
              </a>
            </CoffeeValueContainer>
          </CoffeeList>
          <CoffeeList>
            <img src={cafe} alt="" />
            <div>
              <span id="features">Tradicional</span>
            </div>
            <header>
              Expresso Tadicional
            </header>
            <p>O tradicional café feito com água quente e grãos moidos</p>
            <CoffeeValueContainer>
              <span>R$ <h2>9,90</h2></span>
              <div>
                <button>
                  <Plus size={14} />
                </button>
                <span>1</span>
                <button>
                  <Minus size={14} />
                </button>
              </div>
              <a href="">
                <ShoppingCart size={20} />
              </a>
            </CoffeeValueContainer>
          </CoffeeList>
        </div>
      </CoffeeListContainer>
    </HomeContainer>
  )
}