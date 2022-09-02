import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.header`
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 32px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: #5a2d82;

  img {
    height: 4rem;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  svg {
    width: 2rem;
    height: 2rem;
    color: #fff;
  }
  div {
    text-align: right;
    margin-right: 1rem;
  }
  strong {
    display: block;
    color: #fff;
  }
  span {
    font-size: 0.8rem;
    color: #f2ffff;
  }
`;
