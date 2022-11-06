import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"


export default function NavBar() {
  return (
    <div className="header">
      <SearchBar />
      <ul>
        <Link className="Link" to={"/pokemons"}>
          <li>
            <span>Home</span>
          </li>
        </Link>
        <Link className="Link" to={"/pokemons/create"}>
          <li>
            <span>+</span>
          </li>
        </Link>
        <Link className="Link" to={"/"}>
          <li>
            <span>X</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
