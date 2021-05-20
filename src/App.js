import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>

            <Route exact path="/">
                <Home/>
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
