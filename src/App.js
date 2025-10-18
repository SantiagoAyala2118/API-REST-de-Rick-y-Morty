import imageRickAndMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react'
import { Characters } from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null); //* Acá uso el setCharacters

  const reqApi = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()

    setCharacters(data.results)
    // console.log(characters)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? <Characters characters={characters} setCharacters={setCharacters} /> : (
          <>
            <img src={imageRickAndMorty} alt="Rick & Morty" className="img-home" />
            <button className="btn-search" onClick={reqApi}>
              Buscar Personaje
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
