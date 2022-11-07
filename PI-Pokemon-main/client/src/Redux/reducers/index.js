import {
  GET_ALL_POKEMONS,
  GET_TYPES,
  GET_DETAIL,
  //GET_DETAIL_FROM_STATE,
  GET_NAME_POKEMON,
  POST_POKEMON,
  SET_LOADING,
  FILTER_BY_TYPE,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  //RESET_POKEMONS,
  CLEAR_DETAIL,
  CLEAR_HOME,
} from "../actions/actionsTypes";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: [],
  loading: true,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    //case GET_DETAIL_FROM_STATE:

    case GET_NAME_POKEMON:
      return {
        ...state,
        pokemons: [action.payload],
      };
    case POST_POKEMON:
      return {
        ...state,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case FILTER_BY_TYPE:
      const typesFiltered =
        action.payload === "All"
          ? state.allPokemons
          : state.allPokemons.filter((p) => p.types.includes(action.payload));
      return {
        ...state,
        pokemons: typesFiltered,
        loading: false,
      };
    case FILTER_CREATED:
      let filterSource;
      if (action.payload === "Created") {
        filterSource = state.allPokemons.filter((el) => el.id.length > 6);
      }
      if (action.payload === "Database") {
        filterSource = state.allPokemons.filter(
          (el) => el.id.toString().length <= 6
        );
      }
      if (action.payload === "All") {
        filterSource = state.allPokemons;
      }
      return {
        ...state,
        pokemons: filterSource,
      };

    case ORDER_BY_NAME:
      let filterName;
      if (action.payload === "A-Z") {
        filterName = [...state.allPokemons].sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "Z-A") {
        filterName = [...state.allPokemons].sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      }

      return {
        ...state,
        pokemons: filterName,
        loading: false,
      };
    case ORDER_BY_ATTACK:
      const allPoke = [...state.allPokemons];
      const sortedPokemonAttack =
        action.payload === "Higher"
          ? allPoke.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            })
          : allPoke.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedPokemonAttack,
        loading: false,
      };

    //case RESET_POKEMONS:

    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case CLEAR_HOME:
      return {
        ...state,
        pokemons: state.allPokemons,
      };
    default:
      return { ...state };
  }
}
