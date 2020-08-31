import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "react-bootstrap/Button";
import Typography from "@material-ui/core/Typography";
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
