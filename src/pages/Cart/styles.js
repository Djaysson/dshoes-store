import styled, { keyframes } from "styled-components";
import { darken } from "polished";
import { FaSpinner } from "react-icons/fa";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(FaSpinner)`
  animation: ${rotate} 2000ms infinite linear;
  display: block;
  margin: 0 auto;
`;

export const Container = styled.div`
  margin-top: 6rem;
  height: calc(100% - 60px);
  padding: 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #5a2d82;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, "#5a2d82")};
      }
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    padding: 10px;

    footer {
      flex-direction: column-reverse;
    }

    button {
      margin-top: 20px;
      width: 100%;
      padding: 20px;
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tbody {
    td {
      padding: 12px;
      border-bottom: 1px solid #eee;

      .freight {
        display: flex;
        align-items: flex-start;
        margin: 0.5rem 0;
        strong {
          font-size: 1rem;
          color: #04d483;
        }
      }
    }
  }
  img {
    height: 7rem;
  }
  strong {
    color: #333;
    display: block;
    font-size: 1.13rem;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      width: 1.3rem;
      height: 1.3rem;
      color: #5a2d82;
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    thead {
      display: none;
    }

    tbody tr {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    tbody td {
      padding: 10px;

      &:first-child {
        padding-left: 0;
        padding-bottom: 0;
      }
      &:nth-child(2) {
        flex: 1 1 40%;
        span {
          font-size: 14px;
          color: #666;
        }
      }
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        padding-top: 0;
        padding-bottom: 0;
      }
      &:nth-child(3) {
        padding: 0;
        flex: 1;
        div {
          justify-content: flex-start;
        }
      }

      &:nth-child(4) {
        flex: 1;
        text-align: center;
        font-size: 16px;
        display: none;
      }
      &:nth-child(5) {
        padding: 12px 0;
      }

      img {
        height: 100px;
      }

      input {
        width: 36px;
      }
    }
  }
`;

export const EmptyCartContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  svg {
    margin-bottom: 10px;
  }
  strong {
    color: #999;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    min-height: 400px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
