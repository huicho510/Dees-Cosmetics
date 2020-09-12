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
import Payment from "./components/Payment/index";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HPEvLG6var28apxoYE6Mcwg62a1q9vZrrnkhxyTUrRbRq8P8GT764PvGiNKtkRzha8xouTi7E2KJw7219KDu2fN00gaXQSHY6"
);

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
        <Route exact path="/payment">
          <Elements stripe={promise}><Payment /></Elements>
          </Route>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
