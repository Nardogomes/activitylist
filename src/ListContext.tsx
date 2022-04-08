import { createContext, useState, ReactNode } from "react";

interface AtividadeProps {
  name: string;
  status: boolean;
}

interface ListProviderProps {
  children: ReactNode;
}

interface ListContextData {
  list: AtividadeProps[];
  addItem: (item: AtividadeProps) => void;
  toggleStatus: (id: number) => void;
}

export const ListContext = createContext<ListContextData>(
  {} as ListContextData
);

export function ListProvider({ children }: ListProviderProps) {
  const [list, setList] = useState<AtividadeProps[]>([]);

  function addItem({ name, status }: AtividadeProps) {
    if (name !== "") {
      setList([...list, { name, status }]);
    } else {
      alert("Informe uma atividade");
    }
  }

  function toggleStatus(idAtividade: number) {
    const newList = list.map((atividade, index) => {
      if (idAtividade === index) {
        return {
          name: atividade.name,
          status: !atividade.status,
        };
      }

      return atividade;
    });

    setList(newList);
  }

  return (
    <ListContext.Provider value={{ list, addItem, toggleStatus }}>
      {children}
    </ListContext.Provider>
  );
}
