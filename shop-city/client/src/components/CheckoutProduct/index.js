import React from "react";
import "./style.css"

function CheckoutProduct({ id, title, image, price }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="" />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-title">
            <small>$</small>
           <strong>{price}</strong>
            </p>
      </div>
      {/* <button onClick={RemoveFromCart}>Remove From Cart</button> */}
    </div>
  );
}

export default CheckoutProduct;
