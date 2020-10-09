import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

function StoreCard({ product }) {
  return (
    <>
      <Paper
        elevation={5}
        className={"storeCard"}
        component={Link}
        to={`/product/${product.id}`}>
        <div className={"product-name"}> {product.name + " "} </div>
        <div className={"product-price"}> {product.price.toLocaleString()} &#36; </div>
        {/* <img src={`/icons/${iconNumber}.png`} alt='weather-icon'/> */}
        <img className={"product-image"} alt={"product"} src={window.location.origin + `/images/${product.id}.jpg`}></img>
      </Paper>
    </>
  );
}

export default StoreCard;
