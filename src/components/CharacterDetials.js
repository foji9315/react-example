import { useParams } from "react-router-dom";

function CharacterDetails(params) {
    const {id} = useParams();

    return (
        <div>
            {id}
        </div>
    );

}
export default CharacterDetails;