import { Fragment } from "react";
import TourCard from "../../components/tour-operator-cards/toursCards";
import "./tours.scss";

function Tours() {
  return (
    <Fragment>
      <div className="heading">
        <div className="tours-info-container">
          <h1>Photo Safaris and Tours</h1>
          <p>
            Experience Pilanesberg's wildlife with our trusted operators. From
            big cats to majestic elephants, our diverse safaris cater to all
            nature enthusiasts. Join us for a thrilling exploration into the
            heart of Pilanesberg National Park.
          </p>
        </div>
      </div>
      <div className="tour-operators-container">
        <TourCard imgUrl="images/heini.jpg" heading="Heinrich, the kgabo" infoText="Join me and find some kgabos" />
        <TourCard imgUrl="https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568" heading="Spongebob" infoText="The one and only true expert" />
        <TourCard imgUrl="https://m.media-amazon.com/images/M/MV5BNmFiMmUwNGMtZjYyNy00NjA2LTgwZjktNTkyZWEzNTg2YmUyXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg" heading="He Man" infoText="The master of the universe" />
      </div>
    </Fragment>
  );
}

export default Tours;
