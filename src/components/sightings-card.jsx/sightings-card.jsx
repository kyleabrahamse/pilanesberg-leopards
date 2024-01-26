function SightingsCard({ name, img, location, time, description, profilePic }) {
  return (
    <div className="sightings-card">
      <div className="sightings-card-heading">
        <img className="card-profile" src={profilePic} alt={`${name}'s profile`} />
        <p className="name-heading">{name} </p>
      </div>
      <img src={img} alt="leopard" />
      <p className="location-name">{location}</p>
      <p className="time">{time}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default SightingsCard;
