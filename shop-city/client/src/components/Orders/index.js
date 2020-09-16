import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import "./styles.css";
import { useStateValue } from "../StateProvider/StateProvider";
import Order from "../Order/index";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user && user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders-order">
        {orders &&
          orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
    </div>
  );
}

export default Orders;
