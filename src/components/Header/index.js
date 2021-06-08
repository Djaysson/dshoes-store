import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';

export default function Header() {
    const cart = useSelector((state) => state.cart.length)
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
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>

    )
}
