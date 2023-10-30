import './App.css';
import { CharactersContextProvider } from './contexts/CharactersContext';
import CharacterList from "./components/CharacterList/CharacterList";
import Controls from './components/Controls/Controls';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <CharactersContextProvider>
          <Controls/>
          <CharacterList/>
        </CharactersContextProvider>
      </section>
    </div>
  );
}

export default App;
