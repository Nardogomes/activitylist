import { createContext, useState, ReactNode } from "react";

interface ListProviderProps {
  children: ReactNode;
}

interface ListContextData {
  list: string[];
  addItem: (item: string) => void;
}

export const ListContext = createContext<ListContextData>(
  {} as ListContextData
);

export function ListProvider({ children }: ListProviderProps) {
  const [list, setList] = useState<string[]>([]);

  function addItem(item: string) {
    setList([...list, item]);
  }

  return (
    <ListContext.Provider value={{ list, addItem }}>
      {children}
    </ListContext.Provider>
  );
}
