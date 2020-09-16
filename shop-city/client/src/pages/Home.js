import React, { useState, useEffect } from "react";
import Product from "../components/Product/index";
import "./style.css";
import API from "../utils/API";
import Banner from "../components/Banner/index";

const Home = () => {
  // Setting our component's initial state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProduct();
  }, []);

  function loadProduct() {
    API.getProducts()

      .then((res) => setProducts(res.data))

      .catch((err) => console.log(err));
  }

  return (
    <div className="home">
      <Banner />
      <div className="home__row">
        {products.map((product) => (
          <Product
            key={product._id}
            id={product._id}
            image={product.image}
            price={product.price}
            title={product.title}
          ></Product>
        ))}
      </div>
      <div className="home__row"></div>
    </div>
  );
};

export default Home;
