import { Link } from "react-router-dom";

import "./leopard-id-card.scss";

function LeopardIdCard({ name, img, route }) {

  const nameLink = route.toLowerCase().split(" ")

  return (
    <div className="card-id-container">
      <img src={img} />
      <Link className="link" to={`/${nameLink[0]}`}>
        <h3 className="id-heading">{name}</h3>
      </Link>
    </div>
  );
}

export default LeopardIdCard;
