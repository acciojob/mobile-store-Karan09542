
import React from "react";
import './../styles/App.css';
import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList"
import ProductDetails from "./ProductDetails"
import AdminPanel from "./AdminPanel"

const App = () => {
  return (
    <div id="main">
        {/* Do not remove the main div */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
    </div>
  )
}

export default App
