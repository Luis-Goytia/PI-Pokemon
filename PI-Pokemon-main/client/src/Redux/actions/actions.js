import axios from "axios";
import {
  GET_ALL_POKEMONS,
  GET_TYPES,
  GET_DETAIL,
  //GET_DETAIL_FROM_STATE,
  GET_NAME_POKEMON,
  //POST_POKEMON,
  SET_LOADING,
  FILTER_BY_TYPE,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  //RESET_POKEMONS,
  CLEAR_DETAIL,
  CLEAR_HOME,
  PESO,
} from "../actions/actionsTypes";

export function getAllPokemons() {
  return async function (dispatch) {
    dispatch(loading());
    try {
      const res = await axios.get("/pokemons");
      return dispatch({
        type: GET_ALL_POKEMONS,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_LOADING,
        payload: true,
      });
    }
  };
}

export function getTypes() {
  return async function (dispatch) {
    dispatch(loading());
    const res = await axios.get("/types");
    return dispatch({
      type: GET_TYPES,
      payload: res.data,
    });
  };
}

export function getDetail(pokemonId) {
  return async function (dispatch) {
    dispatch(loading());
    try {
      const res = await axios.get(`/pokemons/${pokemonId}`);
      return dispatch({
        type: GET_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log("NO TENGO EL DETAIL", error);
    }
  };
}

export function getNamePokemon(namePokemon) {
  return async function (dispatch) {
    dispatch(loading());
    try {
      const res = await axios.get(`/pokemons?name=${namePokemon}`);
      return dispatch({
        type: GET_NAME_POKEMON,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_LOADING,
        payload: true,
      });
    }
  };
}

export function postPokemon(dataPokemon) {
  return async function (dispatch) {
    dispatch(loading());
    try {
      const json = await axios.post("/pokemons", dataPokemon);
      return json;
    } catch (error) {
      return dispatch({
        type: SET_LOADING,
        payload: true,
      });
    }
  };
}

export function filterByType(payload) {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByAttack(payload) {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
}
export function clearDetail() {
  return {
    type: CLEAR_DETAIL,
  };
}

export function clearHome() {
  return {
    type: CLEAR_HOME,
  };
}

export function loading() {
  return {
    type: SET_LOADING,
  };
}

export function filterWeight(){
  return{
    type: PESO,
  }
}
