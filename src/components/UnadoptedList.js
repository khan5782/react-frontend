import {useState, useEffect} from 'react'
import PetCardList from './PetCardList'

function UnadoptedList(){

    // a list for only unadopted
    const [unadoptedList, setUnadoptedList] = useState([])

    useEffect(() => {
        fetch('/pets/needadoption')
        .then(res => res.json())
        .then(setUnadoptedList)
    }, [])

    return(
        <div className="row">
            <div className="col">
            <h1 className="text-center">Unadopted Pets!</h1>
            <PetCardList petList={unadoptedList}/>
            </div>
        </div>
    )
}

export default UnadoptedList;