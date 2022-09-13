import { HeaderConteiner } from "./styles";

import logoApp from '../../../assets/icons/logo.svg';
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export function Header() {
  const { cartQuantity } = useContext(CartContext)

  function handleShowCartQuantity() {
    console.log(cartQuantity)
    return cartQuantity;
  }

  return (
    <HeaderConteiner>
      <img src={logoApp} alt="" />
      <nav>
        <span>endereço</span>
        <a href="">
          <ShoppingCart size={24} />
        </a>
        <p>
          {handleShowCartQuantity()}
        </p>
      </nav>
    </HeaderConteiner>
  )
}