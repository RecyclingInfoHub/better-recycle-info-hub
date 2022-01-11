import * as React from "react";
import { Link } from "gatsby";

const LinkImage = ({ image, title, to }) => (
  <Link to={to}>
    <div title={title} className="text-center">
      <img src={image} className="w-48 mx-auto my-4 transform hover:scale-110 transition duration-300" />
      {title}
    </div>
  </Link>
);


export default LinkImage;