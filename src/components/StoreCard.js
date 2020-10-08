import React, { useState } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import night from "../images/night.jpg";

function StoreCard({ product }) {
  return (
    <>
      <Paper
        elevation={5}
        className={"storeCard"}
        component={Link}
        // to={{pathname: `/product/${product.id}`, query: {id:`${product.id}`}}}
        to={`/product/${product.id}`}>
        <div className={"product-name"}> {product.name + " "} </div>
        <div className={"product-price"}> {product.price} &#36; </div>
        <img className={"product-image"} alt={"product"} src={night}></img>
      </Paper>
    </>
  );
}

export default StoreCard;
