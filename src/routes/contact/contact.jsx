import { Link } from "react-router-dom";
import Button from "../../components/button/button";

import "./contact.scss";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h3>Contact us.</h3>
        <p>We'd love to hear from you!</p>
        <p>
          Fill out the form or alternatively email us at{" "}
          <Link className="link">
            <span>pilanesbergleopards@gmail.com</span>
          </Link>
        </p>
      </div>
      <div className="contact-right">
        <form>
          <p>Name (required)</p>
          <div className="name-container">
            <div className="first">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="last">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <label>Email (required)</label>
          <input type="email" />
          <label>Message (required)</label>
          <textarea type="text" rows="5" />
          <Button buttonType="white" text="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
