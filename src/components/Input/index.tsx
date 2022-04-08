import { useState, useContext } from "react";
import { ListContext } from "../../ListContext";

import { Container } from "./styles";

export function Input() {
  const { addItem } = useContext(ListContext);

  const [activity, setActivity] = useState<string>("");

  function incrementItem() {
    addItem({ name: activity, status: false });

    setActivity("");
  }

  return (
    <Container>
      <h1>Minhas Atividades</h1>
      <div className="input-info">
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button type="button" onClick={incrementItem}>
          Adicionar
        </button>
      </div>
    </Container>
  );
}
