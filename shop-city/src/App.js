import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation/index";
import Footer from "./components/Footer/Footer"
import Card from "./components/Card/index"



function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Card />
        <Footer />
        </div>
        </Router>
  );
}

export default App;
