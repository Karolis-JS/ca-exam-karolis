import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>

            <Route exact path="/">
                <Home/>
            </Route>

          </Switch>
        </Router>
      </div>
  );
}

export default App;
