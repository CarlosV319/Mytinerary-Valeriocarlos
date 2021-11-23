import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <h5>MyTinerary Proyect 2021 - all rights reserved</h5>
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
      </ul>
    </footer>
  );
};
export default Footer;

//  Footer: recapitular la información del sitio, debería contener
//  otro menú de navegación para facilitarle la vida al usuario,
//  e información diversa a criterio de
//  ustedes (dirección, redes sociales, mapa, lo que quieran).
