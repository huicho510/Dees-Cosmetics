import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation/index";
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home"



function App() {
  return (
    <Router>
      <div>
        <Navigation />
      <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        
        <Footer />
        </div>
        </Router>
  );
}

export default App;
