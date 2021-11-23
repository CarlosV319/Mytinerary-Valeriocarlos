import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link as={Link} to={"/Home"} className="logo nav-link">
          MyTinerary
        </Link>
        <button className="menu-desplegable" id="check">
          <i class="fas fa-bars"></i>
        </button>

        <ul className="nav-menu ">
          <li className="nav-menu-item">
            <Link as={Link} to={"/Home"} className="nav-menu-link nav-link">
              home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link as={Link} to={"/Cities"} className="nav-menu-link nav-link">
              Cities
            </Link>
          </li>
          <li className="nav-menu-item"></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
