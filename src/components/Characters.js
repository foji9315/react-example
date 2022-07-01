function Characters(params) {
    const { characters, setCharacters } = params;

    const backToHome = () => {
        setCharacters(null);
    }

    return (
        <div className="characters">
            <h1 className="title">Characters</h1>
            <span id="backToHome1Button" className="back-home" onClick={backToHome}>Back to home</span>
            <div className="container-characters">
                {characters.map((element, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={element.image} alt={element.name} />
                        </div>
                        <div>
                            <h3>{element.name}</h3>
                            <h6>
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
                                <span>{element.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Specie: </span>
                                <span>{element.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span id="backToHome2Button" className="back-home" onClick={backToHome} >Home</span>
        </div>
    );
}

export default Characters;