import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from "react-icons/md";
import { formatPrice } from "../../util/format";
import * as CardActions from "../../store/modules/cart/actions";

import {
  Container,
  ProductTable,
  EmptyCartContainer,
  Total,
  LoadingIcon,
} from "./styles";

export default function Cart() {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const totalPrice = useSelector((state) =>
    formatPrice(
      state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    )
  );
  const updating = useSelector((state) => state.updating);
  const dispatch = useDispatch();
  return (
    <Container>
      {cart.length ? (
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
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <div className="freight">
                    <strong>Frete Grátis</strong>
                  </div>
                  <span>{product.priceFormatted}</span>
                </td>

                <td>
                  <div>
                    <button
                      type="buttton"
                      onClick={() =>
                        dispatch(
                          CardActions.updateAmountRequest(
                            product.id,
                            product.amount - 1
                          )
                        )
                      }
                    >
                      <MdRemoveCircleOutline />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button
                      type="buttton"
                      onClick={() =>
                        dispatch(
                          CardActions.updateAmountRequest(
                            product.id,
                            product.amount + 1
                          )
                        )
                      }
                    >
                      <MdAddCircleOutline />
                    </button>
                  </div>
                </td>
                <td>
                  {updating.id === product.id && updating.status ? (
                    <LoadingIcon color="#333" size={14} />
                  ) : (
                    <strong>{product.subtotal}</strong>
                  )}
                </td>
                <td>
                  <button
                    type="buttton"
                    onClick={() =>
                      dispatch(CardActions.removeFromCart(product.id))
                    }
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      ) : (
        <EmptyCartContainer>
          <MdRemoveShoppingCart color="#999" size={50} />
          <strong>Carrinho vazio</strong>
        </EmptyCartContainer>
      )}
      <footer>
        <button type="button" disabled={!(cart.length > 0)}>
          Finalizar pedido
        </button>
        <Total>
          <span>TOTAL</span>
          <strong>{totalPrice}</strong>
        </Total>
      </footer>
    </Container>
  );
}
