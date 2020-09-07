import React from "react";
import "./style.css";
import Banner from "../../images/Ban2.gif"

const Index = () => {
  return (
    <div className="home">
        <img
          className="home__image"
          src={Banner}
          alt="home"
        />
    </div>
  );
};

export default Index;
