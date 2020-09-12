import React, { useState } from "react";
import "./style.css";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/index";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../StateProvider/Reducer";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  

  const handleSubmit = (e) => {};

  const handleChange = (event) => {
    //display errors as customer types card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{cart.length} items</Link>)
        </h1>
        {/* delivery adress */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user && user.email}</p>
          </div>
        </div>
        {/* review items */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
            {cart.map((product) => (
              <CheckoutProduct
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
              />
            ))}
          </div>
        </div>

        {/* payment method*/}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            {/* stripe logic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        {" "}
                        SubTotal ({cart.length} items):{" "}
                        <strong>{`${value}`}</strong>
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> :
                  "Buy Now" }</span>
                </button>
              </div>

             {error && <div>{error}</div>} 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
