import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../resources/Images/pokemon.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="img-logo" />
      <SearchBar />
      <ul>
        <Link className="Link" to={"/pokemons"}>
          <li>
            <span>Home</span>
          </li>
        </Link>
        <Link className="Link" to={"/pokemons/create"}>
          <li>
            <span>Created</span>
          </li>
        </Link>
        <Link className="Link" to={"/landingpage"}>
          <li>
            <span>Exit</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
