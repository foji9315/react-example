function Characters(params) {
    let {characters} = params;
    characters=[];

    

    console.log(characters);
    return (
        <div className="characters">
            <h1 className="title">Characters</h1>
            <span id="backToHome1Button" className="back-home" >Back to home</span>
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
                        </div>
                    </div>
                ))}
            </div>
            <span id="backToHome2Button" className="back-home">Back to Home</span>
        </div>
    );
}

export default Characters;