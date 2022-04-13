import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 1rem auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;

  & div {
    width: 30rem;
    height: 10rem;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 0.25rem;
    background-color: #323059;
    color: #fff;

    & span {
      display: inline-block;
      margin-top: 1rem;
    }
  }
`;
