import { useState } from "react";
import callAPi from "../hooks/ApiService";
import rickAndMortyImg from '../img/rick-morty.png';
import { Link } from "react-router-dom";

function Home(params) {
    const {characters, setCharacters} = params; 
    const [pages, setPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);
    const [isInvalid, setIsInvalid] = useState(false);

    console.log(characters);

    const getTotalPages = async () => {
        let apiResponseJson = await callAPi();
        setPages(apiResponseJson.info.pages);
        setCharacters(apiResponseJson.results);
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

    const search = async () => {
        let apiResponseJson = await callAPi(pageNumber);
        setCharacters(apiResponseJson.results);
    }

    return (
        <div className="App">
            <header className="App-header">
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
                <Link id="searchButton" onClick={search} className={`btn-search ${isInvalid ? 'd-none' : ''}`} to="/characters">Search</Link>
            </header>
        </div>
    );
}

export default Home;