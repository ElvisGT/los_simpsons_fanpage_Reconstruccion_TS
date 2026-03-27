import { useNavigate,useParams } from "react-router-dom";
import { useFetchCharacterByID } from "../hooks/useFetchCharacterByID.ts";
import { getCharacterByName } from '../helpers/getCharacterByName.ts';
import { useFetchCharacters } from "../hooks/useFetchCharacters.ts";

const CharacterDetails = () => {
    const navigate = useNavigate();
    const param_name = useParams();
    const {name} = param_name;
    //Buscar en la lista de personajes
    const {characters,loading} = useFetchCharacters();
    if((name) && (characters)){
        const {id} = getCharacterByName(characters,name);
    }

    
    // const {character,loading} = useFetchCharacterByID(id);

    const handleBack = () => {
        navigate("/");
    }

    return (
        <div className="character-details-container">
            {loading &&
                <div className="ring">
                    <h1>Cargando...</h1>
                </div>
            
            }
            

            {character?.id &&
                    <div key={character.id.toString()} className="card-container">
                        <img src={character.portrait_path} alt={character.name} className="card-img"/>
                        <p className="fw-bold">{character.name}</p>
                        <p className="text-center">{character.description}</p>
                        <p className="text-center">Estado: {character.status}</p>
                        <p className="text-center">Ocupación: {character.occupation}</p>
                        <p className="text-center">Género: {character.gender}</p>
                    </div>
            }
            <div className="character-details-button"> 
                <button onClick={handleBack} className="btn btn-primary btn-back">Atras</button>
            </div>
        </div>
    )
}

export default CharacterDetails;
