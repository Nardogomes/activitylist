import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { ListProvider } from "./ListContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <ListProvider>
          <Cards />
          <Input />
          <List />
        </ListProvider>
        <GlobalStyle />
      </main>
    </div>
  );
}
