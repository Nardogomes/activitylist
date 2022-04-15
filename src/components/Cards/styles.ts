import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 1rem auto;

  h1 {
    margin-left: 3rem;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;

    & div {
      width: 30rem;
      height: 16rem;
      margin-top: 2rem;
      padding: 1rem;
      border-radius: 0.25rem;
      background-color: #323059;
      color: #fff;

      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }
`;
