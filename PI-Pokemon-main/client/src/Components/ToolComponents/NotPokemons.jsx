import { React } from "react";
import { Link } from "react-router-dom";
import LoaderImage from "../../resources/dino.gif";
import "../Home/Home.css";

export default function NotPokemons() {
  return (
    <div className="notfund-loader">
      <h1>Sorry, We couldn't find any results</h1>
      <img src={LoaderImage} alt="loading..." />
      <h2>Go back home or create a new videogame!</h2>
      <div className="option-buttons">
        <Link to={"/home"}>
          <button id="back">Go back!</button>
        </Link>

        <Link to={"/pokemons/create"}>
          <button id="create">Create Pokemon!</button>
        </Link>
      </div>
    </div>
  );
}
