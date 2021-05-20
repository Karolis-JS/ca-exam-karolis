import './App.css';
import http from "./plugins/Fetch"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";


function App() {

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        http.get('/allUsers').then(res => {
            setAllUsers(res)
        })

    }, [allUsers])

  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>

            <Route exact path="/">
                <Home users={allUsers} setUsers={(e) => setAllUsers([e])}/>
            </Route>
              <Route path="/upload">
                  <Upload/>
              </Route>

          </Switch>
        </Router>
      </div>
  );
}

export default App;
