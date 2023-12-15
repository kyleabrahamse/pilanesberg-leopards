import React from "react";
import "./leopard-id-card-page.scss";

function LeopardIdCardPage({ leopard }) {
  const gallery = leopard.gallery;

  return (
    <div className="id-page-container">
      <h1>{leopard.name}</h1>
      <div className="portfolio-image-container">
        {gallery.map((imageObject, index) => {
          // Extract the image URL from the values inside the object
          const imageURL = Object.values(imageObject)[0];

          return <img key={index} src={imageURL} alt={leopard.name} />;
        })}
      </div>
    </div>
  );
}

export default LeopardIdCardPage;
