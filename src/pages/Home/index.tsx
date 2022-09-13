import { CoffeeContainer, CoffeeDescription, CoffeeList, CoffeeListContainer, CoffeeValueContainer, HomeContainer, HomeHeader } from "./styles";

import coffeeLogo from '../../assets/icons/home.svg';
import { ShoppingCart, Timer, Coffee, Package, Plus, Minus } from "phosphor-react";
import { useState } from "react";

import { CoffeeCart } from "../../context/CartContext";

const imagePath = 'src/assets/coffees/';

export interface Coffee {
  url: string;
  title: string;
  description: string;
  price: number;
  features: string[];
}

let coffeeList: Coffee[] = [
  {
    url: 'traditional.svg',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    features: ['TRADICIONAL']
  },
  {
    url: 'americano.svg',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 12.00,
    features: ['TRADICIONAL']
  },
  {
    url: 'cremoso.svg',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 15.00,
    features: ['TRADICIONAL']
  },
  {
    url: 'gelado.svg',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 15.90,
    features: ['TRADICIONAL', 'GELADO']
  },
  {
    url: 'leite.svg',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 20.30,
    features: ['TRADICIONAL', 'COM LEITE']
  },
  {
    url: 'latte.svg',
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 22.00,
    features: ['TRADICIONAL', 'COM LEITE']
  },
  {
    url: 'capuccino.svg',
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 18.75,
    features: ['TRADICIONAL', 'COM LEITE']
  },
  {
    url: 'machiatto.svg',
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 19.00,
    features: ['TRADICIONAL', 'COM LEITE']
  },
  {
    url: 'mocaccino.svg',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 19.50,
    features: ['TRADICIONAL', 'COM LEITE']
  },
  {
    url: 'chocolate.svg',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 17.00,
    features: ['ESPECIAL', 'COM LEITE']
  },
  {
    url: 'cubano.svg',
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 22.00,
    features: ['ESPECIAL', 'ALCOÓLICO', 'GELADO']
  },
  {
    url: 'havaiano.svg',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 16.00,
    features: ['ESPECIAL']
  },
  {
    url: 'arabe.svg',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 15.00,
    features: ['ESPECIAL']
  },
  {
    url: 'irlandes.svg',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 18.50,
    features: ['ESPECIAL', 'ALCOÓLICO']
  },
]

export function Home() {
  // const [coffees, setCoffees] = useState<CoffeeCart[]>([])
  const [coffees, setCoffees] = useState<CoffeeCart[]>([])

  function handleAddCoffee(coffeeTitle: string) {
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
  }

  function handleWithDrawCoffee(coffeeTitle: string) {
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
    }
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
                    <span id="features">Tradicional</span>
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