import { useHistory } from 'react-router-dom';

function LogIn(props){

    const history = useHistory();
    

    function handleSubmit(e){
        e.preventDefault()
        let username= document.querySelector('[name="username"]').value
        let password= document.querySelector('[name="password"]').value
        fetch('/users/login',  {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        .then(res => res.text())
        .then((data) => {
            console.log(data)
            if(data === '' || data === "[]"){
                document.getElementById('alert').classList.remove("d-none")
                return 
            }
            data = JSON.parse(data)
            props.setId(data.id)
            history.push("/")
        })
    }

    return (
    <div>
        <div className="alert alert-danger d-none" id="alert">
            Invalid Credentials
        </div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input id="username" className="form-control" name="username" />
            </div> 
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="form-control" name="password" />
            </div>      
            
            <button type="submit" className="btn btn-primary btn-block">Log In</button>
            <a  href="/register" className="btn btn-info btn-block">Create An Account!</a>
            
        </form>
    </div>
    )
}

export default LogIn;