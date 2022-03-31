import { Container } from './styles';

export function Cards() {
  return (
    <Container>
      <div className="card-left">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti veritatis facilis necessitatibus dolor!
          Dicta doloribus tempora reprehenderit saepe odit?
          At sint adipisci facilis possimus quos sunt quo nam error aut."
        </p>
        <span>Autor</span>
      </div>
      <div className="card-right">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti veritatis facilis necessitatibus dolor!
          Dicta doloribus tempora reprehenderit saepe odit?
          At sint adipisci facilis possimus quos sunt quo nam error aut."
        </p>
        <span>Autor</span>
      </div>
    </Container>
  );
}
