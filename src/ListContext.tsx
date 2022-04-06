import { createContext, useState, ReactNode } from "react";

interface ListProviderProps {
  children: ReactNode;
}

export const ListContext = createContext<String[]>([]);

export function ListProvider({ children }: ListProviderProps) {
  const [list, setList] = useState(["Estudar", "Praticar"]);

  return <ListContext.Provider value={list}>{children}</ListContext.Provider>;
}
