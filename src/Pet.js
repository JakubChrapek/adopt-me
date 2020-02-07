import React from "react";
import { Link } from "@reach/router";

const Pet = props => {
  const { name, animal, breed, media, location, id } = props;

  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
<<<<<<< HEAD
    <a href={`/details/${id}`} className="pet">
=======
    <Link to={`/details/${id}`} className="pet">
>>>>>>> 0629c508119c5595c0353ce3599ad138afed8fa3
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
<<<<<<< HEAD
    </a>
=======
    </Link>
>>>>>>> 0629c508119c5595c0353ce3599ad138afed8fa3
  );
};

export default Pet;
