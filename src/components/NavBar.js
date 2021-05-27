import { useHistory } from 'react-router-dom';
function NavBar(props){ 

    const history = useHistory();
    
    function handleLogOut(){
        props.setId(null)
        history.push("/login")
    }

    return (
        <nav className="navbar navbar-light bg-light" >      
            <a className="navbar-brand" href="/">Need Pets!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                { props.id ? (<><li className="nav-item active">
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