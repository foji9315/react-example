import CharacterDetails from "./CharacterDetails";

function Characters(params) {
    const { characters, setCharacters, character, setCharacter } = params;

    const backToHome = () => {
        setCharacters(null);
    }

    const renderCharacter = async (event) => {
        let id = event.currentTarget.id;
        let character = await callAPiGetCharacterById(id);
        console.log(character);
        setCharacter(character);
    }

    const callAPiGetCharacterById = async (id) => {
        let url = `https://rickandmortyapi.com/api/character/${id}`;
        console.log(url);
        const apiResponseObj = await fetch(url);
        return await apiResponseObj.json();
    }

    console.log(characters);
    return (
        <div>
            {character && character.hasOwnProperty('name') ?
                <CharacterDetails character={character} setCharacter={setCharacter} /> :
                <>
                    <div className="characters">
                        <h1 className="title">Characters</h1>
                        <span id="backToHome1Button" className="back-home" onClick={backToHome}>Back to home</span>
                        <br></br>
                        <p>Showing from <span id="initValue" className="highlighted">{characters[0].id}</span> to <span id="endValue" className="highlighted">{characters[characters.length - 1].id}</span></p>
                        <div className="container-characters">
                            {characters.map((element, index) => (
                                <div id={element.id} className="character-container" key={index}>
                                    <div>
                                        <img src={element.image} alt={element.name} />
                                    </div>
                                    <div>
                                        <h3>{element.name}</h3>
                                        <h6 id={`status${element.id}`}>
                                            {element.status === "Alive" ? (
                                                <>
                                                    <span className="alive" />
                                                    Alive
                                                </>
                                            ) : (
                                                <>
                                                    <span className="dead" />
                                                    Dead
                                                </>
                                            )}
                                        </h6>
                                        <p>
                                            <span className="text-grey">Episodies: </span>
                                            <span id={`numEpisodies${element.id}`}>{element.episode.length}</span>
                                        </p>
                                        <p>
                                            <span className="text-grey">Specie: </span>
                                            <span id={`specie${element.id}`}>{element.species}</span>
                                        </p>
                                        <p>
                                            <span className="text-grey">Gender: </span>
                                            <span id={`gender${element.id}`}>{element.gender}</span>
                                        </p>
                                        <p>
                                            <span className="text-grey">Ref: </span>
                                            <a target="_blank" id={`url${element.id}`} href={element.url} rel="noreferrer">Api reference</a>
                                        </p>
                                        <p>
                                            <button id={element.id} url={element.url} onClick={renderCharacter} className="btn-search">See details</button>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <span id="backToHome2Button" className="back-home" onClick={backToHome}>Back to Home</span>
                    </div>
                </>
            }
        </div>
    );
}

export default Characters;