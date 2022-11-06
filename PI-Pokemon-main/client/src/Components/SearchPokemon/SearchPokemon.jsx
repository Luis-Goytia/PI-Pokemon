import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { getNamePokemon } from "../../Redux/actions";
import Cards from "../Home/Cards";

export default function SearchPokemon() { 
  const { name } = useParams();
  console.log(name);
 
  const dispatch = useDispatch();
  const Spokemons = useSelector((state) => state.Spokemons);
  const history = useHistory();
  
  
  
  useEffect(() => {
    if (name) dispatch(getNamePokemon(name));
  }, [dispatch, Spokemons]);

  function goBack() {
    history.push("/");
  }

  return (
    <>
      <NavBar />
      <Cards data={Spokemons} />
    </>
  );
}
