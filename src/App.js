import {useEffect} from 'react';
import './App.css';
import Header from './Header.js'
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login.js'
import { useStateValue } from "./StateProvider";
import { auth } from './Firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();
    
useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);

  return (
    <Router>
    <div className="App">
      
      <Switch>
      <Route path="/login">
          <Login />
        </Route>
      <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route> 
      </Switch>
    </div>
    </Router>
  );
}

export default App;
