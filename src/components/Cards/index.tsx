import { useEffect, useState } from "react";
import { Container } from "./styles";

export function Cards() {
  const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333")
      .then((response) => response.json())
      .then((data) => setText(data));
  }, []);

  const random1 = Math.floor(Math.random() * (20 - 1) + 1);
  const random2 = Math.floor(Math.random() * (20 - 1) + 1);

  return (
    <Container>
      <h1>Para motivar</h1>

      <div className="cards">
        <div className="card-left">
          {!text ? (
            "Carregando..."
          ) : (
            <img src={text[random1]} alt={text[random1]} />
          )}
        </div>
        <div className="card-right">
          {!text ? (
            "Carregando..."
          ) : (
            <img src={text[random2]} alt={text[random2]} />
          )}
        </div>
      </div>
    </Container>
  );
}
