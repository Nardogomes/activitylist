import styled from "styled-components";

export const Container = styled.div`
  width: 63rem;
  margin: 3rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .input-info {
    display: inline-block;
    width: 63rem;
    height: 2.5rem;
    margin-top: 2rem;

    input {
      width: 50rem;
      height: 100%;
      border: none;
      border-radius: 0.25rem;
      font-size: 1rem;
      padding: 0.5rem;
      background-color: #f5f5f5;
    }

    button {
      border: none;
      width: 10rem;
      height: 2.4rem;
      margin-left: 0.5rem;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      background-color: #2d02c7;
      color: #fff;
      transition: 0.3s;

      &:hover {
        background-color: #323059;
      }
    }
  }
`;
