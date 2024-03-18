import Button from "../../components/button/button";
import Gallery from "../../components/gallery/gallery";
import { Link } from "react-router-dom";

import "./home.scss";

function Home() {
  return (
    <div className="home-page">
      <div className="hero-container">
        {/* <img className="hero-image" src="images/hero.jpg" /> */}
        <div className="hero-content">
          <h1>Discover the Majestic Leopards of the Pilanesberg</h1>
          <p>
            Join us in tracking and monitoring the elusive leopards of
            Pilanesberg National Park. Experience the thrill of spotting and
            photographing these magnificent creatures in their natural habitat.
          </p>
          <div className="btn-container">
            <Link to="/about">
              <Button buttonType="white" text="Learn More" />
            </Link>
            {/* <Button buttonType="white" text="Sign Up" /> */}
          </div>
        </div>
      </div>
      <div className="background-color">
        <div className="home-conservation-container">
          <div className="cta-left">
            <h1>Preserving Leopards in Pilanesberg National Park</h1>
            <p>
              Discover the importance of leopard conservation and learn about
              the vital role of the Pilanesberg Leopard Project in protecting
              these magnificent creatures.
            </p>
            <div className="conservation-cta-container">
              <div className="cta-text-left">
                <h3>Protecting Leopards</h3>
                <p>
                  Join us in safeguarding the future of leopards and their
                  natural habitat.
                </p>
              </div>
              <div className="cta-text-right">
                <h3>Support Us</h3>
                <p>
                  Make a difference by contributing to our leopard conservation
                  efforts today.
                </p>
              </div>
            </div>
            <div className="cta-btn">
              <Link to="/conservation">
                <Button buttonType="white" text="Donate" />
              </Link>
            </div>
          </div>
          <div className="cta-right">
            <img src="images/cta.jpg" alt="leopard log" />
          </div>
        </div>
      </div>
      <div className="links-container">
        <div className="links">
          <img src="images/binoculars-solid.svg" alt="" />
          <h4>Key functionalities</h4>
          <p>Identify and track leopards, and view recent sightings.</p>
          <Link to="/about">
            <Button text="Learn More" />
          </Link>
        </div>
        <div className="links">
          <img src="images/passport-solid.svg" alt="" />
          <h4>Leopard Identification</h4>
          <p>Easily identify individual leopards in the park.</p>
          <Link to="/leopard-profiles">
            <Button text="Learn More" />
          </Link>
        </div>
        <div className="links">
          <img src="images/paw-solid.svg" alt="" />
          <h4>Leopard Tracking</h4>
          <p>See the last known location of leopards in the park.</p>
          <Link to="/sightings">
            <Button text="Learn More" />
          </Link>
        </div>
      </div>
      <div className="contribute">
        <div className="cont-left">
          <img src="images/grassy-leopard.jpg" alt="" />
        </div>
        <div className="cont-right">
          <h1>Join our community</h1>
          <p>
            Share your leopard sightings and contribute to our tracking efforts
          </p>
          <div className="btn-container">
            <Link to="/sightings">
              <Button buttonType="black" text="Report" />
            </Link>
            <Link to="/conservation">
              <Button buttonType="white" text="Contribute" />
            </Link>
          </div>
        </div>
      </div>
      <Gallery />
      <div className="news-letter">
        <div className="news-container">
          <div className="news-left">
            <h1>Stay Updated on Sightings</h1>
            <p>
              Subscribe to stay updated on the latest updates on sightings and
              conservation efforts
            </p>
            <div className="in-cont">
              <form>
                <input
                  placeholder="Your email"
                  className="email-input"
                  type="email"
                />
                <Button text="Subscribe" className="subscribe" />
              </form>
            </div>
          </div>

          <div className="news-right">
            <img src="images/logo-1.png" alt="Logo" />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default Home;
