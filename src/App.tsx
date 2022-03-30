import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Cards />
        <Input />
        <GlobalStyle />
      </main>
    </div>
  );
}
