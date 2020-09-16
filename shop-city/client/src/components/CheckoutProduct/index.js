import React from "react";
import "./style.css";
import { useStateValue } from "../StateProvider/StateProvider";

function CheckoutProduct({ id, title, image, price, hideButton }) {
  const [{cart}, dispatch] = useStateValue();
  console.log(id, title, image, price);

  const RemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="your item" />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">
          {title}</p>
          <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {!hideButton && (
        <button onClick={RemoveFromCart}>Remove From Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
