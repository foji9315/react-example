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
            <div class="card" >
                <img src={character.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{character.name}</h5>
                    <p class="card-text">It is a character originally from
                        <span className="highlighted"> {character.origin.name}</span> and created at :
                        <span className="highlighted"> {character.created}</span> Located at :
                        <span className="highlighted"> {character.location.name}</span> whose gender is
                        <span className="highlighted"> {character.gender}</span>
                        <hr />
                        
                    </p>
                </div>
                <p>
                    <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    Show list of episodies
                    </button>
                </p>
                <div>
                    <div class="collapse collapse-horizontal" id="collapseWidthExample">
                        <div class="card card-body">
                            <ul class="list-group list-group-flush">
                                {character.episode.map((element, index) => (
                                    <li class="list-group-item">{element}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                </div>
            </div>
            <hr></hr>
            <span id="backToPage2Button" className="back-home" onClick={backToPage}>Back to List</span>
        </div>
    );

}
export default CharacterDetails;