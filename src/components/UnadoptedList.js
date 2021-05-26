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
        <PetCardList petList={unadoptedList}/>
    )
}

export default UnadoptedList;