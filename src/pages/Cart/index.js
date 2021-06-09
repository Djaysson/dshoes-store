import React from 'react';
import { useSelector } from 'react-redux';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    const cart = useSelector((state) => state.cart)
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="buttton">
                                        <MdRemoveCircleOutline size={20} color="#1521b3" />
                                    </button>
                                    <input type="number" readOnly value={product.amount} />
                                    <button type="buttton">
                                        <MdAddCircleOutline size={20} color="#1521b3" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$259,80</strong>
                            </td>
                            <td>
                                <button type="buttton">
                                    <MdDelete size={20} color="#1521b3" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">
                    Finalizar pedido
                </button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$1920,28</strong>
                </Total>
            </footer>
        </Container>
    )
}
