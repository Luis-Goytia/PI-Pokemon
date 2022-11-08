import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../resources/Images/pokemon.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="header">
      <Link className="Link" to={"/Home"}>
        <img src={logo} alt="Logo" className="img-logo" />
      </Link>

      <SearchBar />
      <ul>
        <Link className="Link" to={"/Home"}>
          <li>
            <span>Home</span>
          </li>
        </Link>
        <Link className="Link" to={"/pokemons/create"}>
          <li>
            <span>Created</span>
          </li>
        </Link>
        <Link className="Link" to={"/"}>
          <li>
            <span>Exit</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
