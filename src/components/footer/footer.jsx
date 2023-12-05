import "./footer.scss";
import { Link } from "react-router-dom";

const date = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <strong className="contact">contact:</strong>
      <p>
        
      </p>
      <Link
        target="_blank"
        to="https://www.facebook.com/groups/PilanesbergLeopardProject/"
      >
        <i className="fa-brands fa-facebook fa-xl"></i>
      </Link>
      <Link to="https://www.instagram.com/pilanesbergleopardproject/" target="_blank">
        <i className="fa-brands fa-square-instagram fa-xl"></i>
      </Link>
      <i className="fa-brands fa-youtube fa-xl"></i>
      <div className="footer-end">
        <p className="date">copyright © {date}</p>
      </div>
    </div>
  );
}

export default Footer;
