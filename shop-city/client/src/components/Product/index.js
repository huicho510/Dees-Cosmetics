import React from "react";
import "./style.css";

// const useStyles = makeStyles({
//   root: {
//     maxWidth:345,
//   },
//   media: {
//     height: 140,
//   },
// });

export default function Product({ id, title, image, price, rating }) {
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
      <button>Add To Basket</button>
    </div>
  );
}
