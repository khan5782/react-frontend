import PetCardList from "./PetCardList";
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

function Account(){

    const history = useHistory();

    const [personalPetList, setPersonalPetList] = useState([]);
    const [user, setUser] = useState({})

    useEffect(() => {
        let id = localStorage.getItem("id")
        fetch(`/pets/owned/${id}` )
        .then(res => res.json())
        .then(setPersonalPetList) 

        fetch(`/users/${id}`) 
        .then(res => res.json())
        .then(setUser)
    }, [])

    function handleUpdateUser(e){
        e.preventDefault()
        let id = localStorage.getItem("id")
        fetch(`/users/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
  
        })
        
    }

    function handleDeleteUser(){
        let id = localStorage.getItem("id")
        fetch(`/users/${id}`, {
            method: "DELETE"
        }) 
        .then(() => {
            localStorage.removeItem("id")
            history.push("/login")
        })
    }

    return (
        <div>
            <form onSubmit={handleUpdateUser}>
            <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" name="name" value={user.name} onChange={(e) => {setUser({...user, name: e.target.value})}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" className="form-control" name="username" value={user.username} onChange={(e) => {setUser({...user, username: e.target.value})}}/>
                </div> 
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" name="password" value={user.password} onChange={(e) => {setUser({...user, password: e.target.value})}}/>
                </div>    
                <button className="btn btn-primary">Update User</button>
            </form>
            <button className="btn btn-primary" onClick={handleDeleteUser}>Delete User</button>
            { personalPetList && personalPetList.length > 0? <PetCardList petList={personalPetList}/> : <div className="jumbotron">You have no pets!</div>} 
        </div>
        
    )
}

export default Account;