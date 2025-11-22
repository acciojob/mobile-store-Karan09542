import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";

const ProductTile = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #babfbf",
        borderRadius: "5px",
        padding: "10px",
        gap: "10px",
        marginBottom: "10px",
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
  const { products, setProducts } = useContext(ProductContext);
  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    image: "",
    description: "",
    id: products.length + 1,
  });
  const [showForm, setShowForm] = React.useState({ type: "" });

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setProduct((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  function addProduct() {
    setProducts((prev) => [{ ...product, id: products.length + 1 }, ...prev]);
    setShowForm({ type: "" });
  }
  function updateProduct() {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? { ...product } : p))
    );
    setShowForm({ type: "" });
  }
  function deleteProduct() {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
    setShowForm({ type: "" });
  }
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
          setShowForm((prev) => ({ type: prev.type ? "" : "add" }));
        }}
        style={{ margin: "10px 0" }}
      >
        Add Product
      </button>
      <div>
        {products.map((product) => (
          <ProductTile
            key={product.id}
            onClick={() => {
              setProduct(product);
              setShowForm((prev) => ({
                type: prev.type ? "" : "edit",
              }));
            }}
            product={product}
          />
        ))}
      </div>
      {showForm.type && (
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
          {showForm.type === "add" && (
            <button type="button" onClick={addProduct}>
              Add Product
            </button>
          )}
          {showForm.type === "edit" && (
            <div className="buttons">
              <button className="float-right" type="button" onClick={updateProduct}>
                Save
              </button>
              <button className="float-right" type="button" onClick={deleteProduct}>
                Delete
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default AdminPanel;
