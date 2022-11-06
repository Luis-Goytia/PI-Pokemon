import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../Redux/actions";
import Cards from "./Cards";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination"
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);
  //const error = useSelector((state) => state.error);
  const pokemonsCopy = useSelector((state) => state.allPokemons);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  useEffect(() => {
    if (pokemons.length < 1) dispatch(getPokemons());
  }, [dispatch, pokemons]);

  console.log(pokemons);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokemonsCopy.slice(indexOfFirstCard, indexOfLastCard);

  const page = (e) => setCurrentPage(e);
  console.log(currentCards);
  return (
    <>
      <NavBar />
      {console.log(currentCards)}
      <Cards data={currentCards} />
      <div>
        <Pagination cardsPerPage={cardsPerPage} pokemonsCopy={pokemons.length} page={page} />
      </div>
      
    </>
  );
}
