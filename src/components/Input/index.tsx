import { useState } from "react";
import { Container } from "./styles";

export function Input() {
  const [activity, setActivity] = useState("");
  console.log(activity);

  return (
    <Container>
      <h1>Minhas Atividades</h1>
      <div className="input-info">
        <input type="text" onChange={(e) => setActivity(e.target.value)} />
        <button type="button">Adicionar</button>
      </div>
    </Container>
  );
}
