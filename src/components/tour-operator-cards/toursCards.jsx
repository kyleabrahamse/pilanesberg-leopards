import Button from "../button/button";

import "./toursCards.scss";

function TourCard({ imgUrl, heading, infoText }) {
  return (
    <div className="tour-card-container">
      <img src={imgUrl} alt={heading} />
      <h3>{heading}</h3>
      <p>{infoText}</p>
      <Button buttonType="white" text="More Info"/>
    </div>
  );
}

export default TourCard;
