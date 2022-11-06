import axios from "axios";
import {
  GET_ALL_POKEMONS,
  GET_TYPES,
  GET_DETAIL,
  //GET_DETAIL_FROM_STATE,
  GET_NAME_POKEMON,
  //POST_POKEMON,
  LOADING,
  FILTER_BY_TYPE,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  //RESET_POKEMONS,
  CLEAR_DETAIL,
  CLEAR_HOME,
} from "../actions/actionsTypes";

export function getAllPokemons() {
  return function (dispatch) {
    try {
      const res = axios.get("/pokemons");
      return dispatch({
        type: GET_ALL_POKEMONS,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
}

export function getTypes() {
  return function (dispatch) {
    const res = axios.get("/types");
    return dispatch({
      type: GET_TYPES,
      payload: res.data,
    });
  };
}

export function getDetail(pokemonId) {
  return function (dispatch) {
    try {
      const res = axios.get(`/pokemons/${pokemonId}`);
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
  return function (dispatch) {
    try {
      const res = axios.get(`/pokemons?name=${namePokemon}`);
      return dispatch({
        type: GET_NAME_POKEMON,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
}

export function postPokemon(dataPokemon) {
  return function (dispatch) {
    const json = axios.post("/pokemons", dataPokemon);
    return json;
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
