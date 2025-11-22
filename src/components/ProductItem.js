import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProductPage = location.pathname === `/products/${product.id}`;

  return (
    <div className="product-item">
      <div>
        <div className="product-image">
          <img
            src={
              product.image ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png"
            }
            alt="phone"
          />
        </div>
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <p className="product-price">
            <b>Price: </b>
            {product.price} Rs
          </p>
          {isProductPage && (
            <p className="product-description">
              <b>description: </b>
              <br /> {product.description}
            </p>
          )}
        </div>
      </div>
      {!isProductPage ? (
        <Link to={`/products/${product.id}`}>
          <button>Buy</button>
        </Link>
      ) : (
          <button className="btn" onClick={() => navigate("/")}>Back</button>
      )}
    </div>
  );
};

export default ProductItem;
