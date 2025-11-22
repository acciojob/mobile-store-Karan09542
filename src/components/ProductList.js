import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "../context/ProductContextProvider";

const ProductList = () => {
  const {products} = useContext(ProductContext)
  return (
    <div style={{marginBottom: "5rem"}} className="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
