import styled, { keyframes, css } from "styled-components";
import { FaSpinner } from "react-icons/fa";
import { darken } from "polished";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(FaSpinner)`
  animation: ${rotate} 2000ms infinite linear;
`;

export const Container = styled.div`
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  strong {
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
  }
`;

export const ProductList = styled.ul`
  margin-top: 6rem;
  height: calc(100% - 60px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  ${(props) => {
    let styles = "";
    for (let i = 0; i < props.length; i += 1) {
      styles += `
        li:nth-child(${i + 1}) {
          animation: product-card-appear 300ms;
          animation-fill-mode: backwards;
          animation-delay: ${i * 50}ms;
        }
      `;
    }
    return css`
      ${styles}
    `;
  }}
  li {
    display: flex;
    flex-direction: column;
    background: #fefffe;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    img {
      max-width: 250px;
      align-self: center;
      transition: transform 0.5s;
      &:hover {
        transform: scale(1.05);
      }
    }
    > strong {
      font-size: 1.13rem;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: 0.5rem 0;

      strong {
        font-size: 1rem;
        color: #04d483;
      }
      span {
        color: #aaa;
        font-size: 0.88rem;
      }
    }
    > span {
      font-size: 1.3rem;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    button {
      background: #5a2d82;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, "#5a2d82")};
      }
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }

  @media (min-width: 300px) and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) and (max-width: 979px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
