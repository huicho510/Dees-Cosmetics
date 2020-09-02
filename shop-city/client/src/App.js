import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/index";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/UserForm";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "../src/components/StateProvider/StateProvider";
import { auth } from "./config/firebase";

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
      unsuscribe();
    }

  }, []);

  console.log("User is >>>", user)

  return (
    <Router>
      <div>
        <Navigation />

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/sign" component={SignUp} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
