import { useContext } from "react";
import { ListContext } from "../../ListContext";

import { FiTrash2 } from "react-icons/fi";
import { Container } from "./styles";

export function List() {
  const { list } = useContext(ListContext);

  return (
    <Container>
      {list.length !== 0
        ? list.map((item, index) => (
            <div key={index}>
              <p>
                <input type="checkbox" />
                {item}
              </p>
              <button>
                <FiTrash2 size={24} />
              </button>
            </div>
          ))
        : "Não há atividades"}
    </Container>
  );
}
