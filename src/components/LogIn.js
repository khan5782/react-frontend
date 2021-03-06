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
            if(data === '' || data === "[]" || data === 'Invalid Password'){
                document.getElementById('alert').classList.remove("d-none")
                return 
            }
            data = JSON.parse(data)
            props.setUsername(data.username)
            history.push("/")
        })
    }

    return (
    <>
        <div className="alert alert-danger d-none" id="alert">
            Invalid Credentials
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
            <h1>Log In Form</h1>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input id="username" className="form-control" name="username" />
            </div> 
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="form-control" name="password" />
            </div>      
            
            <button type="submit" className="btn btn-primary btn-block">Log In</button>
            <a  href="/register" className="btn btn-info btn-block">Create An Account</a>
            <button type="submit" className="btn btn-danger btn-block">Forgot Password!</button>
        </form>
    </>
    )
}

export default LogIn;