import { Link } from "react-router-dom";

import "./gallery.scss";

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="img-container">
        <img className="img-1" src="images/tree.jpg" alt="" />
        <img className="img-2" src="images/light.jpg" alt="leopard in sun" />
        <img
          className="img-3"
          src="images/baby-leopard.jpg"
          alt="baby leopard"
        />
        <img className="img-4" src="images/treehouse.jpg" alt="" />
      </div>
      <Link className="link" to="/gallery">
        <h2>View more</h2>
      </Link>
    </div>
  );
}

export default Gallery;
