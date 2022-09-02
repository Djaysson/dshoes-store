import paymentMethods from "../../services/data";
import {
  RiTruckFill,
  RiTimeLine,
  RiBankCard2Line,
  RiArrowUpCircleLine,
} from "react-icons/ri";

import { Container, PaymentOptionsList, Button } from "./styles";
export function Footer() {
  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Container>
      <div>
        <div>
          <RiTruckFill />
          <div>
            <strong>Frete grátis</strong>
            <span>Em todos os produtos</span>
          </div>
        </div>
        <div>
          <RiTimeLine />
          <div>
            <strong>Entrega expressa</strong>
            <span>A partir de 2 dias úteis confira as regras</span>
          </div>
        </div>
        <div>
          <RiBankCard2Line />
          <div>
            <strong>Em até sem 10x sem juros</strong>
            <span>no cartão de crédito</span>
          </div>
        </div>
      </div>
      <Button type="button" onClick={handleScrollTop}>
        <RiArrowUpCircleLine />
      </Button>
      <PaymentOptionsList>
        {paymentMethods.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.description} />
          </li>
        ))}
      </PaymentOptionsList>
    </Container>
  );
}
