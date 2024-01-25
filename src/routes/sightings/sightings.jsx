import Button from "../../components/button/button";
import leopardIdCardsSorted from "../../leopard-profiles";

import "./sightings.scss";

const dummyData = [
  {
    name: "Clover",
    location: "Tilodi dam",
    time: "09:00",
    description: "Seen pomping an elephant",
    image: "images/clover.jpg",
  },
  {
    name: "Kgodisa",
    location: "Thutlwa road",
    time: "18:00",
    description: "Climbing a big bushy tree",
    image: "images/kgodisa.JPG",
  },
  {
    name: "Zawadi",
    location: "Makwe way",
    time: "17:00",
    description: "Eating a nice juicy zebra calf",
    image: "images/zawadi-test.jpg",
  },
];

function Sightings() {
  return (
    <div className="sightings-container">
      <div className="sightings-board">
        {dummyData.map((data) => {
          return (
            <div className="sightings-card">
              <div className="sightings-card-heading">
                {leopardIdCardsSorted.map((leo) => {
                  if (
                    leo.name.toLowerCase().includes(data.name.toLowerCase())
                  ) {
                    return <img className="card-profile" src={leo.imgUrl} />;
                  }
                })}
                <p className="name-heading">{data.name}</p>
              </div>
              <img src={data.image} alt="leopard" />
              <p className="location-name">{data.location}</p>
              <p className="time">{data.time}</p>
              <p className="description">{data.description}</p>
            </div>
          );
        })}
      </div>
      <div className="sightings-container-form">
        <form>
          <label className="label" htmlFor="name">
            Which leopard was seen?
          </label>
          <input type="text" id="name" placeholder="Name of leopard" />
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Where was it seen" />
          <label htmlFor="time">When was it last seen?</label>
          <input type="time" id="Time" placeholder="Time" />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            rows="4"
            placeholder="Any other information"
          />
          <label htmlFor="image-input">Upload Photo</label>
          <input id="image-input" type="file" />
          <Button buttonType="white" text="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Sightings;
