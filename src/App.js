import rickAndMortyImg from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
    document.title = "SPA example";
    const [characters, setCharacters] = useState(null);

    const search = async () => {
        const apiResponseObj = await fetch("https://rickandmortyapi.com/api/character");
        const apiResponseJson = await apiResponseObj.json();
        setCharacters(apiResponseJson.results);
    }

    return (
        <div className="App">
            <header className="App-header">
                {characters && characters.hasOwnProperty('length') ?
                    <Characters characters={characters} setCharacters={setCharacters} /> :
                    <>
                        <h1 className='title'>Rick & Morty</h1>
                        <img src={rickAndMortyImg} alt="Rick&Morty" className='img-home' />
                        <button id="searchButton" onClick={search} className="btn-search">Search</button>
                    </>
                }
            </header>
        </div>
    );
}

export default App;
