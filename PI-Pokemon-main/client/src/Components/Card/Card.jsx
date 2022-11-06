import React from 'react';
import { Link } from "react-router-dom";



export default function Card({ name, image, types, id }) {
    return (
      <Link to={`/pokemons/${id}`} >
        <div >{name[0].toUpperCase() + name.slice(1)}</div>
        <img src={image} alt="imagen card" />
        <div >
          {types.map((type) => (
            <div key={id + type} className={type}>
              {type.toUpperCase()}
            </div>
          ))}
        </div>
      </Link>
    );
  }