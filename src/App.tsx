export function App() {
  return (
    <div className="App">
      <header>
        <span>Activity List</span>
        <div className="user">
          <h2>Ednardo Gomes</h2>
          <span>Bem-vindo(a) ao Activity List</span>
        </div>
      </header>
      <main>
        <div className="cards">
          <h1>Card1</h1>
          <h1>Card2</h1>
        </div>
        <div className="input">
          <h1>Minhas Atividades</h1>
          <input type="text" />
          <button type="button">Adicionar</button>
        </div>
      </main>
    </div>
  );
}
