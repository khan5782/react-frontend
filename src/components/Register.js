import { useHistory } from 'react-router-dom';


function Register(props){

    const history = useHistory();
    
    function handleSubmission(e){
        e.preventDefault()
        let name= document.querySelector('[name="name"]').value
        let username= document.querySelector('[name="username"]').value
        let password= document.querySelector('[name="password"]').value
        fetch('/users', {
            method: "POST",
            body: JSON.stringify({
                name,
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
  
        })
        .then(res => res.json())
        .then((data) => {
            props.setUsername(data.username)
            history.push("/")
        })
    }
  
    return (
        <>
            <form onSubmit={handleSubmission} className="login-form">
                <h1>Register Here</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" className="form-control" name="username" />
                </div> 
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" name="password" />
                </div>      
                <div className="row">
                <div className="col">
                <button className="btn btn-primary btn-block">Create Account</button>
                </div>
                </div>
            </form>
        </>
    )
 
}


export default Register;