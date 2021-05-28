import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom';
function PetDetail(){
    
    const [currentPet, setCurrentPet] = useState({})
    const history = useHistory();

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

    function handleAdopt(){
        // handle adopted pets when clicked
        fetch('/pets/claim/' + id, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(() => {
            history.push("/account")
        })
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src={currentPet.image_url} style={imgStyle}/>
                    </div>
                    <div className="row">
                        <button className="btn btn-success btn-block" onClick={handleAdopt}>Adopt!</button>
                    </div>
                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item"> Name: {currentPet.name}</li>
                        <li className="list-group-item">Age: {currentPet.age} years old</li>
                        <li className="list-group-item">Species: {currentPet.species}</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h2>Description</h2>
                <p>{currentPet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default PetDetail;