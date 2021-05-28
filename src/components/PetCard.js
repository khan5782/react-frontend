import {Link} from 'react-router-dom'
function PetCard(props){

    let imgStyle = {
        width: "100%",
        height: "200px"
    }

    return (
        <div className="card col-3 mb-3 paddingCard ">
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