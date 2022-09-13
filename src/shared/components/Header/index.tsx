import { HeaderConteiner } from "./styles";

import logoApp from '../../../assets/icons/logo.svg';
import { ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderConteiner>
      <img src={logoApp} alt="" />
      <nav>
        <span>endereço</span>
        <a href="">
          <ShoppingCart size={24} />
        </a>
        <p>
          3
        </p>
      </nav>
    </HeaderConteiner>
  )
}