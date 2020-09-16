import React from "react";
import "./styles.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/index";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.cart.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3>Order Total:{value}</h3>}
        decimalScale={2}
        fixedDecimalScale={true}
        value={order.data.amount /100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
