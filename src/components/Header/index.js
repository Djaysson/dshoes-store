import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BiCart } from "react-icons/bi";
import { Container, Cart } from "./styles";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const cart = useSelector((state) => state.cart.length);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Dstore Shoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cart} itens</span>
        </div>
        <BiCart />
      </Cart>
    </Container>
  );
}
