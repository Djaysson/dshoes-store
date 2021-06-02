import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import shoes1 from '../../assets/images/shoes1.jpg';
import shoes2 from '../../assets/images/shoes2.jpg';
import shoes3 from '../../assets/images/shoes3.jpg';
import shoes4 from '../../assets/images/shoes4.jpg';
import shoes5 from '../../assets/images/shoes5.jpg';
import shoes6 from '../../assets/images/shoes6.jpg';
export default function Home() {
    return (
        <ProductList>
            <li>
                <img src={shoes1} alt="Tênis" />
                <strong>Tenis muito legal</strong>
                <span>R$114,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />  3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={shoes2} alt="Tênis" />
                <strong>Tenis muito legal</strong>
                <span>R$114,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />  3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={shoes3} alt="Tênis" />
                <strong>Tenis muito legal</strong>
                <span>R$114,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />  3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={shoes4} alt="Tênis" />
                <strong>Tenis muito legal</strong>
                <span>R$114,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />  3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={shoes5} alt="Tênis" />
                <strong>Tenis muito legal</strong>
                <span>R$114,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />  3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={shoes6} alt="Tênis" />
                <strong>Tenis muito legal</strong>
                <span>R$114,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />  3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    )
}
