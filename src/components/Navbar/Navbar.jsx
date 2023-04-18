import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/todo">ToDo</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
}

export default Navbar;
