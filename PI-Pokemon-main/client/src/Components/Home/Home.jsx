import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../Redux/actions/actions";
import Cards from "./Cards";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import Loader from "../ToolComponents/Loader";
import NotPokemons from "../ToolComponents/NotPokemons";
import "./Home.css";
import Filters from "../Filters/Filters";

export default function Home() {
  const allPokemons = useSelector((state) => state.allPokemons);
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allPokemons.length < 1) dispatch(getAllPokemons());
  }, [dispatch, allPokemons]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokemons.slice(indexOfFirstCard, indexOfLastCard);
  const page = (e) => setCurrentPage(e);
 
  if (pokemons.length > 0 && !loading) {
    if (currentCards.length === 0) {
      return <NotPokemons />;
    }

    return (
      <div className="contHome">
        <NavBar />
        <Filters page={page} />
        <Cards data={currentCards} />
        <div>
          <Pagination
            cardsPerPage={cardsPerPage}
            pokemons={pokemons.length}
            page={page}
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }
}
