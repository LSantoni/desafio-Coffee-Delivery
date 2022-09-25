import { HeaderConteiner } from "./styles";

import logoApp from '../../../assets/icons/logo.svg';
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { NavLink } from "react-router-dom"

import { MapPin } from "phosphor-react"

export function Header() {
  const { cartQuantity, resume } = useContext(CartContext)

  function handleShowCartQuantity() {
    return cartQuantity;
  }

  return (
    <HeaderConteiner>
      <img src={logoApp} alt="" />
      <nav>
        {resume && (
          <span>
            <MapPin size={20} />
            {resume.city}, {resume.state}
          </span>
        )}
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