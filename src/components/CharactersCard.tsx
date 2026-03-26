import { useNavigate } from "react-router-dom";

const CharactersCard = ({id,img,name}) => {
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/:${name}`)
    }

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <img className="card-img" src={img} alt={name}/>
                    <p className="card-text fw-bold">{name}</p>
                    <button className="btn btn-primary" onClick={handleDetails}>Detalles</button>
                </div>
            </div>
        </div>
    )
}

export default CharactersCard;
