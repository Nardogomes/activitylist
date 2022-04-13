import { useEffect, useState } from 'react';
import { Container } from './styles';

export function Cards() {
  const [text, setText] = useState('');
  
  useEffect(() => {
    fetch('http://localhost:3333')
      .then(response => response.json())
      .then(info => setText(info.data))
  } ,[])
  
  console.log(text);
  
  return (
    <Container>
      <div className="card-left">
        <p>
          {!text ? "Carregando..." : text}
        </p>
        <span>Autor</span>
      </div>
      <div className="card-right">
        <p>
         {text}
        </p>
        <span>Autor</span>
      </div>
    </Container>
  );
}
