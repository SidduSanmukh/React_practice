import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="bg-gray-700 h-screen text-center text-white p-20">
      <h1 className="font-bold text-3xl">Products Page</h1>
      <Link to="/products/men">Men</Link>
      <Link to="/products/women">Women</Link>
      <Outlet />
    </div>
  );
};

export default Products;
