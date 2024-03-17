import { Link } from "react-router-dom";
import Button from "../../components/button/button";

import "./about.scss";

function About() {
  return (
    <div className="about-container">
      <img src="images/about.jpg" alt="" />
      <div className="about-content-container">
        <h1>Pilanesberg Leopard Project</h1>
        <p>
          Welcome to Pilanesberg Leopard Project, your ultimate destination for
          immersing yourself in the captivating world of one of nature's most
          elusive and majestic creatures - the leopard. Nestled within the
          breathtaking landscapes of Pilanesberg National Park, our website is
          dedicated to tracking and monitoring these enigmatic felines as they
          roam freely in their natural habitat.
        </p>
        <p>
          Learn how to easily identify leopards with the help of ID cards
          <Link className="link" to="/leopard-profiles">
            <span> here</span>
          </Link>
          , or report your recent sighting
          <Link className="link" to="/sightings">
            <span> here</span>
          </Link>
          .
        </p>
        <p>
          Join us as marvel at these magnificent creatures and discover the
          magic of the Leopards of Pilanesberg
        </p>
        <div className="btn-div">
          <Link to="/conservation">
            <Button buttonType="white" text="Support" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
