import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import "./style.css";
import { getCartTotal } from "../StateProvider/Reducer";

function SubTotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {" "}
              SubTotal ({cart.length} items): <strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
