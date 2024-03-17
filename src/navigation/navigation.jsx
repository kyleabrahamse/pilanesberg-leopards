import Button from "../components/button/button";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

import "./navigation.scss";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function burgers() {
    setIsOpen((open) => !open);
  }

  return (
    <div>
      <div className="nav-bar">
        <div className="nav-left">
          <Link to="/">
            <img src="images/logo-1.png" alt="logo" />
          </Link>
          <ul className="menu-close">
            <Link className="link" to="/About">
              <li>About</li>
            </Link>
            <Link className="link" to="/tours">
              <li>Tours</li>
            </Link>
            <Link className="link" to="/gallery">
              <li>Gallery</li>
            </Link>
            <Link className="link" to="/leopard-profiles">
              <li>Leopard profiles</li>
            </Link>
            <Link className="link" to="/sightings">
              <li>Sightings</li>
            </Link>
            <Link className="link" to="conservation">
              <li>Conservation</li>
            </Link>
          </ul>
        </div>
        <div className="nav-btn-container">
          <Link to="/contact">
            <Button buttonType="white" text="Contact" />
          </Link>
          <Link to="/conservation">
            <Button text="Support" />
          </Link>
        </div>
        <i
          className={
            isOpen
              ? "fa-solid fa-x burger-menu"
              : "fa-solid fa-bars burger-menu"
          }
          onClick={burgers}
        ></i>
      </div>
      <div className={`menu-container ${isOpen ? "menu-open" : "menu-close"}`}>
        <ul className="content">
          <Link className="link" to="/tours" onClick={burgers}>
            <li>Tours</li>
          </Link>
          <Link className="link" to="/gallery" onClick={burgers}>
            <li>Gallery</li>
          </Link>
          <Link className="link" to="/leopard-profiles" onClick={burgers}>
            <li>Leopard profiles</li>
          </Link>
          <Link className="link" to="/sightings" onClick={burgers}>
            <li>Sightings</li>
          </Link>
          <Link className="link" to="conservation" onClick={burgers}>
            <li>Conservation</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Nav;
