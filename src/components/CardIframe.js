import React from "react";

const CardIframe = ({ cardTitle, embedUrl }) => (
  <div className="card shadow-lg">
    <figure>
      <iframe width="100%" height="200" src={embedUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </figure>
    <div className="card-body">
      <div className="card-title">{cardTitle}</div>
    </div>
  </div>
);

export default CardIframe;