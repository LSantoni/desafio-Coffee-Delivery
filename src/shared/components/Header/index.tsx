import { HeaderConteiner } from "./styles";

import logoApp from '../../../assets/icons/logo.svg';
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { NavLink } from "react-router-dom"

export function Header() {
  const { cartQuantity } = useContext(CartContext)

  function handleShowCartQuantity() {
    return cartQuantity;
  }

  return (
    <HeaderConteiner>
      <img src={logoApp} alt="" />
      <nav>
        <span>endereço</span>
        <NavLink to="/checkout">
          <ShoppingCart size={24} />
          {cartQuantity > 0 && (
            <p>
              {handleShowCartQuantity()}
            </p>
          )}
        </NavLink>
      </nav>
    </HeaderConteiner>
  )
}