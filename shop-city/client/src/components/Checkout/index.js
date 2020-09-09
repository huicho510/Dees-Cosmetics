import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/index";
import SubTotal from "../SubTotal/index";
import "./style.css"
import Sale from "../../images/Holiday.gif"

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="left-checkout">
        <img className="checkout-ad" src={Sale} />
        {cart.length === 0 ? (
          <div>
            <h2>Your Shopping Cart Is Empty</h2>
            <p>
              You have no items in your cart. To buy items, click "Add to cart"
              next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">Your Shopping Cart </h2>
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="right-checkout">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
