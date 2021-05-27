import {Link} from 'react-router-dom'
function PetCard(props){

    let imgStyle = {
        width: "200px",
        height: "200px",
        "objectFit": "cover"
    }

    return (
        <div className="card col-3" >
        <Link to={"/pets/" + props.id}>
            <img className="card-img-top" src={props.image_url} alt="Card image cap" style={imgStyle}/>
            <div className="card-body">
                <h5 className="card-title">{props.species}</h5>
            </div>
        </Link> 
        </div>
       
    )
}

export default PetCard;