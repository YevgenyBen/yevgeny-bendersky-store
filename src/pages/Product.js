import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import "./Product.css";

function Product() {
  const allProducts = useSelector((state) => state.inventoryReducer);
  const location = useLocation();
  const selectedProduct = allProducts.find(
    (product) =>
      product.id ==
      location.pathname.split("/")[location.pathname.split("/").length - 1]
  );
  return (
    <div>
      {selectedProduct ? (
        <ProductCard product={selectedProduct} />
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

export default Product;
