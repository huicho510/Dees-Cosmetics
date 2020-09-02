import React from "react";
import "./style.css";
import { useStateValue } from "../StateProvider/StateProvider"


export default function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
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
        {/* <p>{id}</p> */}
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
            <p>{"star"}</p>
            ))}
        </div> */}
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add To Basket</button>
    </div>
  );
}
