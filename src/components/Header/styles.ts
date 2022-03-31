import styled from "styled-components";

export const Container = styled.header`
  background-color: #323059;
  color: #fff;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;

    span {
      margin-right: 1rem;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  .user {
    display: flex;
    align-items: center;

    &:first-child {
      border: 1px solid #fff;
    }

    & .user-info {
      margin-left: 1rem;
    }
  }
`;
