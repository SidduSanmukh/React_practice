import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="text-white font-bold bg-zinc-700 p-6">
      <div className="flex justify-between">
        <h1>Siddarooda</h1>
        <div className="flex gap-4 text-blue-400">
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/Products">Products</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
