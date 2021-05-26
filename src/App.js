import './App.css';
import NavBar from './components/NavBar';
import UnadoptedList from './components/UnadoptedList';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Account from './components/Account';
import useLocalStorage from './hooks/local-storage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PetDetail from './components/PetDetail';

function App() {

  const [id, setId] = useLocalStorage("id", null)

  return (
    <div className="App">
      <Router>
        <NavBar setId={setId} id={id}/>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <UnadoptedList />
          </Route>
          <Route path="/pets/:id">
            <PetDetail />
          </Route>
          <Route path="/register">
            <Register setId={setId}/>
          </Route>
          <Route path="/login">
            <LogIn setId={setId}/>
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
        </div>
      </Router>
      

    </div>
  );
}

export default App;
