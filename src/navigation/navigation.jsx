import Button from "../components/button/button";
import { Outlet, Link } from "react-router-dom";
import Headroom from "react-headroom";
import { useState } from "react";

import "./navigation.scss";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function burgers() {
    setIsOpen((open) => !open);
  }

  return (
    <div>
      <Headroom>
        <div className="nav-bar">
          <div className="nav-left">
            <Link to="/">
              <img src="images/logo-1.png" alt="logo" />
            </Link>
            <ul className="menu-close">
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
            <Button buttonType="white" text="Contact" />
            <Button text="Support" />
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
        <div className={`menu-container ${isOpen ? 'menu-open' : 'menu-close'}`}>
          <ul >
            {/* <Link className="link" to="/tours">
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
            </Link> */}
            <h1 className="content">penis</h1>
          </ul>
        </div>
      </Headroom>
      <Outlet />
    </div>
  );
}

export default Nav;
