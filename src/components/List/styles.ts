import styled from "styled-components";

export const Container = styled.div`
  max-width: 63rem;
  margin: 3rem auto;

  div {
    margin-top: 0.5rem;
    padding: 0.5rem;

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
      background-color: red;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
