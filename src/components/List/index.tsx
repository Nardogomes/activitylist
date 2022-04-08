import { useContext } from "react";
import { ListContext } from "../../ListContext";

import { FiTrash2 } from "react-icons/fi";
import { Container } from "./styles";

export function List() {
  const { list, toggleStatus } = useContext(ListContext);

  return (
    <Container>
      {list.length !== 0
        ? list.map((item, index) => (
            <div key={index}>
              <p>
                <input
                  type="checkbox"
                  checked={item.status}
                  onClick={() => toggleStatus(index)}
                  onChange={(e) => {}}
                />
                <span className={item.status ? "concluded" : ""}>
                  {item.name}
                </span>
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
