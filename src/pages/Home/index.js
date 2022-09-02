import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import api from "../../services/api";
import { formatPrice } from "../../util/format";
import { ProductList, LoadingIcon, Container } from "./styles";

import * as CartActions from "../../store/modules/cart/actions";

function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const updating = useSelector((state) => state.updating);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await api.get("/products");
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        previousValue: formatPrice(product.previousValue),
      }));

      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  if (loading) {
    return (
      <Container>
        <strong>Carregando</strong>
        <LoadingIcon size={22} color="#FFF" />
      </Container>
    );
  }

  return (
    <ProductList length={products.length}>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <div>
            <strong>Frete Grátis</strong>
            <span>De {product.previousValue} por apenas</span>
          </div>
          <span>{product.priceFormatted} á vista</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              {updating.id === product.id && updating.status ? (
                <LoadingIcon size={16} color="#FFF" />
              ) : (
                <MdAddShoppingCart size={16} color="#FFF" />
              )}

              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

export default Home;
