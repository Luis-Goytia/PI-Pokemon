import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, types, id }) {
  return (
    <Link to={`/pokemons/${id}`}>
      <div className="Card">
        <div className="name">{name[0].toUpperCase() + name.slice(1)}</div>
        <div className="card_image">
          <img src={image} alt="imagen card" />
        </div>
        <div className="types">
          {types.map((type) => (
            <div key={id + type} className={type}>
              {type.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
