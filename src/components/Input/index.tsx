import { useState, useContext } from "react";
import { ListContext } from "../../ListContext";

import { Container } from "./styles";

export function Input() {
  const { addItem } = useContext(ListContext);

  const [activity, setActivity] = useState("");

  function incrementItem() {
    addItem(activity);
  }

  return (
    <Container>
      <h1>Minhas Atividades</h1>
      <div className="input-info">
        <input type="text" onChange={(e) => setActivity(e.target.value)} />
        <button type="button" onClick={incrementItem}>
          Adicionar
        </button>
      </div>
    </Container>
  );
}
