import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <span>Activity List</span>
        <div className="user">
          <h2>Ednardo Gomes</h2>
          <span>Bem-vindo(a) ao Activity List</span>
        </div>
      </Content>
    </Container>
  );
}
