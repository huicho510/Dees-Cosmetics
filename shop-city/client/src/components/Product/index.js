import React from "react";
import "./style.css";
import { useStateValue } from "../StateProvider/StateProvider"


export default function Product({ id, title, image, price }) {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    console.log(id,title)
    // Add Item to basket
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price
      }
    })
  };

  return (
    <div className="product">
  
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img className="product__image" src={image}  alt="" />
      <button onClick={addToCart}>Add To Basket</button>
    </div>
  );
}
