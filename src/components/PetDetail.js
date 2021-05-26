import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

function PetDetail(){
    
    const [currentPet, setCurrentPet] = useState({})

    let imgStyle = {
        width: "100%",
        height: "400px",
        "objectFit": "cover"
    }
     
    let { id } = useParams();

    useEffect(() => { 
        fetch('/pets/' + id)
        .then(res => res.json())
        .then(setCurrentPet)
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src={currentPet.image_url} style={imgStyle}/>
                    </div>
                    <div className="row">
                        <button className="btn btn-success btn-block">Adopt!</button>
                    </div>
                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item">{currentPet.name}</li>
                        <li className="list-group-item">{currentPet.age}</li>
                        <li className="list-group-item">{currentPet.species}</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                {currentPet.description}
            </div>
        </div>
    )
}

export default PetDetail;