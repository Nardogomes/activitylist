import styled from "styled-components";

export const Container = styled.div`
  max-width: 63rem;
  margin: 3rem auto;

  div {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(50, 48, 89, 0.3);

    p {
      input {
        margin-right: 0.5rem;
      }

      span.concluded {
        text-decoration: line-through;
      }
    }

    button {
      border: none;
      border-radius: 0.25rem;
      background-color: #db342c;
      color: #d5d5d5;

      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
