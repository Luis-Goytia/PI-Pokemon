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
  loading:true,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      if (!action.payload.includes(null)) {
        return {
          ...state,
          pokemons: action.payload,
          allPokemons: action.payload,
        };
      } else {
        return { ...state, loading: true};
      }
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
      const all_pokemons = [...state.allPokemons];
      const typesFiltered =
        action.payload === "all"
          ? all_pokemons
          : all_pokemons.filter((p) => p.types.includes(action.payload));
      return {
        ...state,
        pokemons: typesFiltered,
        loading: true,
      };
    case FILTER_CREATED:
      const allPokemons = [...state.allPokemons];
      let leakedPokemons;
      if (action.payload === "created") {
        leakedPokemons = allPokemons.filter((p) => p.includes("-"));
        if (!leakedPokemons.length) {
          return {
            ...state,
            loading: false,
          };
        }
      }
      if (action.payload === "existing") {
        leakedPokemons = allPokemons.filter((p) => !p.includes("-"));
      }
      return {
        ...state,
        pokemons: leakedPokemons,
        loading: true,
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
        loading: true,
      };
    case ORDER_BY_ATTACK:
      const allPoke = [...state.allPokemons];
      const sortedPokemonAttack =
        action.payload === "up"
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
        loading: true,
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
        pokemons: [],
      };
    default:
      return { ...state };
  }
}
