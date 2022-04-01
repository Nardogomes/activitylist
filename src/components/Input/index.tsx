import { Container } from "./styles";

export function Input() {
  return (
    <Container>
      <h1>Minhas Atividades</h1>
      <div className="input-info">
        <input type="text" />
        <button type="button">Adicionar</button>
      </div>
    </Container>
  );
}
