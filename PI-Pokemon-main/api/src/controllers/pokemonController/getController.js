const axios = require("axios");
const { Op } = require("sequelize");
const { Pokemon, Type } = require("../../db.js");

module.exports = {
  getAllPokemonsAPI: async () => {
    try {
      let pokemonsUrl = [];
      let pokemonsAPI = [];
      let url = `https://pokeapi.co/api/v2/pokemon`;

      do {
        let dataFromAPI = await axios.get(url);
        pokemonsUrl = [
          ...pokemonsUrl,
          ...dataFromAPI.data.results.map((poke) => {
            let datos = axios(poke.url);
            return datos;
          }),
        ];
        url = dataFromAPI.data.next;
      } while (url && pokemonsUrl.length < 150);

      await Promise.all(pokemonsUrl).then((response) =>
        response.map((el) => {
          let pokemon = el.data;
          let pokemonAPI = {
            id: pokemon.id,
            name: pokemon.name,
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types
              ? pokemon.types.map((el) => el.type.name)
              : "Unknown Type",
            img: pokemon.sprites.other.dream_world.front_default,
          };

          pokemonsAPI.push(pokemonAPI);
        })
      );
      //console.log(pokemonsAPI);
      return pokemonsAPI;
    } catch (error) {
      console.log(`Error ${error} in getAllPokemonsAPI `);
      throw `Error ${error} in getAllPokemonsAPI `;
    }
  },

  getAllPokemonsDB: async () => {
    try {
      //-----Datos DB
      let allInDB = await Pokemon.findAll({
        include: [Type],
      });

      //------
      let pokemonsDB = allInDB.map((pokemon) => {
        let allTypes = pokemon.Types.map((type) => type.name); //----ID TYPES ID POKOMONES
        return {
          id: pokemon.id,
          name: pokemon.name,
          hp: pokemon.hp,
          attack: pokemon.attack,
          defense: pokemon.defense,
          height: pokemon.height,
          weight: pokemon.weight,
          types: allTypes,
          img: pokemon.img,
        };
      });
      return pokemonsDB;
    } catch (error) {
      console.log(`Error ${error} in getAllPokemonsDB `);
      throw `Error ${error} in getAllPokemonsDB `;
    }
  },

  getPokemonById: async (id) => {
    try {
      console.log(id.includes("-"));
      if (id.includes("-")) {
        let pokemon = await Pokemon.findOne({
          where: { id: id },
          include: [Type],
        });
        if (pokemon) {
          let allTypes = pokemon.Types.map((type) => type.name);
          return {
            id: pokemon.id,
            name: pokemon.name,
            hp: pokemon.hp,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
            types: allTypes,
            img: pokemon.img,
          };
        }
        return pokemon;
      } else {
        let dataFromAPI = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        //console.log(dataFromAPI.data)
        if (dataFromAPI) {
          let pokemon = dataFromAPI.data;
          let pokemonAPI = {
            id: pokemon.id,
            name: pokemon.name,
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types
              ? pokemon.types.map((el) => el.type.name)
              : "Unknown Type",
            img: pokemon.sprites.other.dream_world.front_default,
          };
          console.log(pokemonAPI);
          return pokemonAPI;
        }
      }
    } catch (error) {
      console.log(`Error ${error} in getAllPokemonByID `);
      throw `Error ${error} in getAllPokemonByID `;
    }
  },

  getPokemonByName: async (name) => {
    try {
      console.log(name);
      let pokemon = await Pokemon.findOne({
        where: { name: { [Op.iLike]: "%" + name + "%" } },
        include: [Type],
      });
      if (pokemon) {
        let allTypes = pokemon.Types.map((type) => type.name).join(",");
        let pokemonDB = {
          id: pokemon.id,
          name: pokemon.name,
          hp: pokemon.hp,
          attack: pokemon.attack,
          defense: pokemon.defense,
          speed: pokemon.speed,
          height: pokemon.height,
          weight: pokemon.weight,
          types: allTypes,
          img: pokemon.img,
        };
        return pokemonDB;
      }
      let dataFromAPI = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      //console.log(dataFromAPI.data)
      if (dataFromAPI) {
        let pokemon = dataFromAPI.data;
        let pokemonAPI = {
          id: pokemon.id,
          name: pokemon.name,
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          speed: pokemon.stats[5].base_stat,
          height: pokemon.height,
          weight: pokemon.weight,
          types: pokemon.types
            ? pokemon.types.map((el) => el.type.name)
            : "Unknown Type",
          img: pokemon.sprites.other.dream_world.front_default,
        };
        //console.log(pokemonAPI);
        return pokemonAPI;
      }
    } catch (error) {
      console.log(`Error ${error} in getAllPokemonsByName `);
      throw `Error ${error} in getAllPokemonsByName `;
    }
  },
};
