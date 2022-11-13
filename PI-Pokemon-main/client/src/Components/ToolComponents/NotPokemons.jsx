import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPokemons, getTypes } from "../../Redux/actions/actions";
import LoaderImage from "../../resources/dino.gif";
import "../Home/Home.css";

export default function NotPokemons() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (pokemons.length < 1) dispatch(getTypes());
  }, [dispatch, pokemons]);

  function handleReload(e) {
    e.preventDefault();
    dispatch(getAllPokemons())

  }

  return (
    <div className="notfund-loader">
      <h1>Sorry, We couldn't find any results</h1>
      <img src={LoaderImage} alt="loading..." />
      <h2>Go back home or create a new Pokemon!</h2>
      <div className="option-buttons">
          <button id="back" onClick={handleReload}>Go back!</button>
        <Link to={"/pokemons/create"}>
          <button id="create">Create Pokemon!</button>
        </Link>
      </div>
    </div>
  );
}
