import { useNavigate } from "react-router-dom";

import "./leopard-id-card.scss";

function LeopardIdCard({ name, img, route }) {
  const navigate = useNavigate();

  function gallerySelector() {
    navigate(`/${route.toLowerCase()}`);
  }

  return (
    <div onClick={gallerySelector} className="card-id-container">
      <img src={img} alt={name} />
      <h3  className="id-heading">
        {name}
      </h3>
    </div>
  );
}

export default LeopardIdCard;
