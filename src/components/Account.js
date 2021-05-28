import PetCardList from "./PetCardList";
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

function Account(){

    const history = useHistory();

    const [personalPetList, setPersonalPetList] = useState([]);
    const [user, setUser] = useState({})

    
    useEffect(() => {
        fetch(`/pets/owned` )
        .then(res => res.json())
        .then(setPersonalPetList) 

        fetch(`/user`) 
        .then(res => res.json())
        .then(setUser)
    }, [])

    function handleUpdateUser(e){
        e.preventDefault()
        fetch(`/users`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.err){
                document.getElementById('alert').classList.remove('d-none')
            } else{
                document.getElementById('alert').classList.add('d-none')
            }
        })
        
    }

    function handleDeleteUser(){
        fetch(`/users`, {
            method: "DELETE"
        })  
        .then(res => res.text())
        .then((data) => {
            if(data === ''){
                localStorage.removeItem("id")
                history.push("/login")
                return
            }
            data = JSON.parse(data)
            if(data.err){
                console.log(data.err) 
            }
            
        })
    }

    return (
        <div className="row breakout-row">
            <div className="col">
            <div className="row">
                <div className="col">
                    <div className="alert alert-danger d-none" id="alert">            
                    Missing Password
                </div>
                </div>
            </div>

            <div className="row justify-content-end">
                <div className="col-3">
                <button className="btn btn-warning btn-block" onClick={handleDeleteUser}>Delete Account</button>
                </div>
            </div>

            <div className="row">
                <div className="col">
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
                
                <div className="row justify-content-center">
                <div className="col-5">
                <button className="btn btn-primary btn-block">Update User Info</button>
                </div>
                </div>
            </form>
            
                </div>
            </div>

            <div className="row">
            <div className="col">
            { personalPetList && personalPetList.length > 0? <PetCardList petList={personalPetList}/> : <div className="jumbotron text-center">You have not adopted any pets yet!</div>} 
            </div>
            </div>
        </div>
        </div>
        
    )
}

export default Account;