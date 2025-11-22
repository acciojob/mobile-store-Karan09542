import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { products, updateProduct, deleteProduct } = useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState(products[id - 1]);
  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setProduct((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <form style={{position: "static", transform: "none", margin: "auto"}} className="form-control">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          onChange={handleChange}
          value={product.name}
          type="text"
          id="name"
          placeholder="Product Name"
        />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <textarea
          onChange={handleChange}
          value={product.description}
          type="text"
          id="description"
          placeholder="Product Description"
          rows={5}
        />
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input
          onChange={handleChange}
          value={product.price}
          type="text"
          id="price"
          placeholder="Product Price"
        />
      </div>

      <div>
        <label htmlFor="image">Image: </label>
        <input
          onChange={handleChange}
          value={product.image}
          type="text"
          id="image"
          placeholder="Product Image"
        />
      </div>

      <button
        className="float-right"
        type="button"
        onClick={() => {
            updateProduct(product)
            navigate('/')
        }}
      >
        Save
      </button>
      <button
        className="float-right"
        type="button"
        onClick={() =>{
             deleteProduct(product.id)
             navigate('/')
        }}
      >
        Delete
      </button>
    </form>
  );
};

export default EditProduct;
