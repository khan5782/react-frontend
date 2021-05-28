import { useHistory } from 'react-router-dom';
function NavBar(props){ 

    const history = useHistory();
    
    function handleLogOut(){
        fetch('/users/logout')
        .then(() =>{
            props.setUsername(null)
            history.push("/login")
        })   
    }

    return (
        <nav className="navbar navbar-light bg-light navbar-expand-lg sticky-top" >      
            <a className="navbar-brand header" href="/" >Need Pets!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                { props.username ? (<><li className="nav-item active">
                    <a className="nav-link" href="/account">Account</a>
                </li> <li className="nav-item active">
                    <a className="nav-link" href="#" onClick={handleLogOut}>Log Out</a>
                </li></>) : (<li className="nav-item active">
                    <a className="nav-link" href="/login">Log In</a>
                </li>) }
               
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;