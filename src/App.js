import rickAndMortyImg from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
    document.title = "SPA example";
    const [characters, setCharacters] = useState(null);
    const [character, setCharacter] = useState(null);
    const [pages, setPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);
    const [isInvalid, setIsInvalid] = useState(false);

    const search = async () => {
        let apiResponseJson = await callAPiPage(pageNumber);
        setCharacters(apiResponseJson.results);
    }

    const getTotalPages = async () => {
        let apiResponseJson = await callAPiPage();
        setPages(apiResponseJson.info.pages);
    }

    const callAPiPage = async (page) => {
        let url = `https://rickandmortyapi.com/api/character${page > 1 ? `?page=${page}` : ""}`; 
        console.log(url);
        const apiResponseObj = await fetch(url);
        return await apiResponseObj.json();
    }

    const updatePageToRender = (evt) => {
        let page = evt.target.value;
        page = page === "" ? 1 : page;
        if (page > 0 && page <= pages) {
            setPageNumber(page);
            setIsInvalid(false);
            console.log(pageNumber);
        } else {
            setIsInvalid(true);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                {characters && characters.hasOwnProperty('length') ?
                    <Characters characters={characters} setCharacters={setCharacters} character={character} setCharacter={setCharacter} /> :
                    <>
                        <h1 className='title'>Rick & Morty</h1>
                        <img src={rickAndMortyImg} alt="Rick&Morty" className='img-home' />
                        <div id="pagesMessage">
                            <button id="showTotalPages" onClick={getTotalPages} className="btn-page">Show total pages</button>
                            <br></br>
                            <span>There {pages === 1 ? "is" : "are"} <span className='highlighted'>{pages}</span> {pages === 1 ? "page" : 'pages'} available</span>
                            <br></br>
                            <span className='text-grey' display="false"> (by default it is going to render page 1)</span>
                        </div>
                        <br></br>
                        <span id="errorPageRange" className={`text-red ${isInvalid ? '' : 'd-none'}`}> Page number should be {pages === 1 ? pages : `between 1 and ${pages}`}!</span>
                        <input type="Number" id="pageQuery" onChange={updatePageToRender} placeholder="Introduce page" min="1" max={pages}></input>
                        <button id="searchButton" onClick={search} className={`btn-search ${isInvalid ? 'd-none' : ''}`}>Search</button>
                    </>
                }
            </header>
        </div>
    );
}

export default App;
