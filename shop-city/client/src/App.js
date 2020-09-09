import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/index";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/index";
import SignUp from "./pages/UserForm";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "../src/components/StateProvider/StateProvider";
import { auth } from "./config/firebase";
import Login from "./components/Login";


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // clean up operation
      unsuscribe();
    };
  }, []);

  console.log("User is >>>", user);

  return (
    <Router>
      <div className="home">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/sign" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout" component={Checkout} />
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
