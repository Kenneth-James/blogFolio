import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="bg-indigo-800">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-5 px-5 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Ken
          </NavLink>
          <NavLink
            to="/post"
            activeClassName='text-gray-200 bg-gray-700'
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-500 hover:text-green-800"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            activeClassName='text-gray-200 bg-gray-700'
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-500 hover:text-green-800"
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
