import styled, { keyframes } from "styled-components";

const animateUp = keyframes` 
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(3);
  }
  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(0px);
  }
`;
export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
  background: #f5f5f4;
  position: static;
  bottom: 0;

  padding: 0px 32px;
  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
    margin-top: 3rem;
    border-bottom: 1px solid #5a2d82;
    div {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
      color: #5a2d82;
      svg {
        width: 3rem;
        height: 3rem;
        margin-right: 0.5rem;
      }
      div {
        flex-direction: column;
        width: 80%;

        strong {
          font-size: 1rem;
          font-weight: 700;
          white-space: nowrap;
        }
        span {
          font-size: 0.8125rem;
          font-weight: 400;
          white-space: pre-line;
        }
      }
    }

    @media (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export const PaymentOptionsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  list-style: none;
  li {
    margin: 0 0 0.5rem;
  }
`;
export const Button = styled.button`
  position: relative;
  border: 0;
  background: none;
  transition: all 0.5s;
  /* border: 1px solid red; */
  svg {
    width: 3rem;
    height: 3rem;
    color: #5a2d82;
    animation: ${animateUp} infinite 1.5s;
  }
`;
