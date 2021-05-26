import PetCard from './PetCard';

function PetCardList(props){


    return(
        <div className="row">
            {props.petList.map(e => {
                return <PetCard id={e.id} species={e.species} age={e.age} name={e.name} description={e.description} image_url={e.image_url}/>
            })}
        </div>
    )

}

export default PetCardList;