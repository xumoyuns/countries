import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header shadow-lg shadow-black-100 pt-3">
      <div className=" container max-w-screen-xl mx-auto px-5">
        <div className="header-wrapper flex justify-between align-center">
          <div className="text-3xl pb-2">🌏 Countries</div>

          <nav className="nav">
            <ul className="flex gap-3">
              <li className="">
                <NavLink
                  className={`text-blue-500 hover:text-blue-800 text-lg pb-1.5`}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "",
                    borderBottom: isActive ? "2px solid dimgray" : "",
                  })}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={`text-blue-500 hover:text-blue-800 text-lg pb-1.5`}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "",
                    borderBottom: isActive ? "2px solid dimgray" : "",
                  })}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
