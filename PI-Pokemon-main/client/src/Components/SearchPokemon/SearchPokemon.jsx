import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { getNamePokemon } from "../../Redux/actions/actions";
import Cards from "../Home/Cards";

export default function SearchPokemon() { 
  const { name } = useParams();
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state)=>state.loading)
  const history = useHistory();
  
  
  
  useEffect(() => {
    if (name) dispatch(getNamePokemon(name));
  }, [dispatch, name]);

  function goBack() {
    history.push("/");
  }

  return (
    <>
      <NavBar />
      <Cards data={pokemons} />
    </>
  );
}
