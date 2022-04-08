import { createContext, useState, ReactNode } from "react";

interface ListProps {
  name: string;
  status: boolean;
}

interface ListProviderProps {
  children: ReactNode;
}

interface ListContextData {
  list: ListProps[];
  addItem: (item: ListProps) => void;
}

export const ListContext = createContext<ListContextData>(
  {} as ListContextData
);

export function ListProvider({ children }: ListProviderProps) {
  const [list, setList] = useState<ListProps[]>([]);

  function addItem({ name, status }: ListProps) {
    setList([...list, { name, status }]);
  }

  return (
    <ListContext.Provider value={{ list, addItem }}>
      {children}
    </ListContext.Provider>
  );
}
