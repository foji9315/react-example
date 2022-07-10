function CharacterDetails(params) {
    const { character, setCharacter } = params;

    console.log(character);

    const backToPage = () => {
        setCharacter(null);
    }

    return (
        <div className="container">
            <span id="backToPage1Button" className="back-home" onClick={backToPage}>Back to List</span>
            <hr></hr>
            <h1>{character.name}</h1>
            <div className="card border-primary text-bg-dark" >
                <img src={character.image} className="card-img-top border-primary" alt="..." />
                <div className="card-body">
                    <h2 className="card-title text-info fs-2 text"  id="name">{character.name}</h2>
                    <p className="card-text">It is a character originally from
                        <span id="origin" className="highlighted"> {character.origin.name}</span> and created at :
                        <span id="createdAt" className="highlighted"> {new Date(character.created).toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> Located at :
                        <span id="location" className="highlighted"> {character.location.name}</span> whose gender is
                        <span id="gender" className="highlighted"> {character.gender}</span>. He participates on : 
                        <span id="numOfEpisodies" className="highlighted"> {character.episode.length}</span> episodies
                        <hr />
                    </p>
                </div>
                <p>
                    <button className="btn btn-outline-primary btn-lg w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    Show list of episodies
                    </button>
                </p>
                <div>
                    <div className="collapse collapse-horizontal" id="collapseWidthExample">
                        <div className="card card-body border-primary text-bg-dark">
                            <ul className="list-group list-group-flush">
                                {character.episode.map((element, index) => (
                                    <li key={index} className="list-group-item text-white bg-dark border-success">{element}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                </div>
            </div>
            <hr></hr>
            <span id="backToPage2Button" className="back-home" onClick={backToPage}>Back to List</span>
        </div>
    );

}
export default CharacterDetails;