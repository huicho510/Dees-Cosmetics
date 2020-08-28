import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation/index";



function App() {
  return (
    <Router>
      <div>
        <Navigation />
        </div>
        </Router>
  );
}

export default App;
