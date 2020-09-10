import React, { useState, useEffect } from "react";
import Product from "../components/Product/index";
import "./style.css";
import API from "../utils/API";
import Banner from "../components/Banner/index"


const Home = () => {
  // Setting our component's initial state
  const [products, setProducts] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadProduct();
  }, []);

  // Loads all books and sets them to books
  function loadProduct() {
    API.getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="home">
      <Banner />
      <div className="home__row" >
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          ></Product>
        ))}
        <Product
          id="1232"
          title="Lip Gloss"
          price={8.95}
          rating={5}
          image="https://m.toofaced.com/media/export/cms/products/1000x1000/2f_sku_109447_1000x1000_0.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Lash Applicator"
          price={2.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61uF9PDoABL._SY355_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
