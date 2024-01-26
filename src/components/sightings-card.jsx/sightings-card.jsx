import { useNavigate } from "react-router";

function SightingsCard({ name, img, location, time, description, profilePic, navName }) {
  const navigate = useNavigate()

 function handleClick() {
  navigate(`/${navName}`)
 }

  return (
    <div className="sightings-card">
      <div className="sightings-card-heading">
        <img onClick={handleClick} className="card-profile" src={profilePic} alt={`${name}'s profile`} />
        <p onClick={handleClick} className="name-heading">{name} </p>
      </div>
      <img src={img} alt="leopard" />
      <p className="location-name">{location}</p>
      <p className="time">{time}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default SightingsCard;
