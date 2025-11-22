import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const ProductTile = ({ product, Clk }) => {
  return (
    <div
      onClick={Clk}
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #babfbf",
        borderRadius: "5px",
        padding: "10px",
        gap: "10px",
        marginBottom: "10px",
        cursor: "pointer",
      }}
    >
      <img
        style={{ width: "50px", height: "50px", objectFit: "contain" }}
        src={product.image}
        alt={product.name}
      />
      <p style={{ alignSelf: "flex-start", marginTop: "5px" }}>
        {product.name}
      </p>
    </div>
  );
};

const AdminPanel = () => {
  const navigate = useNavigate();
  const { products, addProduct } = useContext(ProductContext);
  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    image: "",
    description: "",
    id: products.length + 1,
  });
  const [showForm, setShowForm] = React.useState(false);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setProduct((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <div className="admin-products">
      <button
        onClick={() => {
          setProduct({
            name: "",
            price: "",
            image: "",
            description: "",
            id: products.length + 1,
          });
          setShowForm(prev => !prev);
        }}
        style={{ margin: "10px 0" }}
      >
        Add Product
      </button>
      <div>
        {products.map((product) => (
          <ProductTile
            key={product.id}
            Clk={() => navigate(`products/${product.id}`)}
            product={product}
          />
        ))}
      </div>
      {showForm && (
        <form className="form-control">
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
            type="button"
            onClick={() => {
              addProduct(product);
              setShowForm(false);
            }}
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminPanel;
