import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import headerJson from "../../API/Data/HeaderJson";
function Header() {
  return (
    <header className="h3 pa3 tr">
      {headerJson.map((header, index) => (
        <Link
          to={header.route}
          key={index}
          className="link dim dark-blue header-link"
        >
          {header.title_name}
        </Link>
      ))}
    </header>
  );
}
export default Header;
