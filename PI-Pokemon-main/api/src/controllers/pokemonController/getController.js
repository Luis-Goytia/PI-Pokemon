const axios = require("axios");
const { Op } = require("sequelize");
const { Pokemon, Type } = require("../../db.js");

module.exports = {
  getAllPokemonsAPI: async () => {
    try {
      let pokemonsUrl = [];
      let pokemonsAPI = [];

      do {
        let dataFromAPI = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        pokemonsUrl = [
          ...pokemonsUrl,
          ...dataFromAPI.data.results.map((poke) => {
            let datos = axios(poke.url);
            return datos;
          }),
        ];
        url = dataFromAPI.data.next;
      } while (url && pokemonsUrl.length < 39);

      //console.log("getAllPokemonsAPI 22:",pokemonsUrl);

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
            img: pokemon.sprites.front_default,
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
      if (id.includes("-")) {
        let pokemon = await Pokemon.findOne({
          where: { id: { [Op.iLike]: "%" + id + "%" } },
          include: [Type],
        });
        if (pokemon) {
          let pokemonDB = pokemon.map((pokemon) => {
            let allTypes = pokemon.Types.map((type) => type.name).join(",");
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
          });
          return pokemonDB;
        }
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
            img: pokemon.sprites.front_default,
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
          img: pokemon.sprites.front_default,
        };
        //console.log(pokemonAPI);
        return pokemonAPI;
      }
    } catch (error) {
      console.log(`Error ${error} in getAllPokemonsByName `);
      throw `Error ${error} in getAllPokemonsByName `;
    }
  },

  getApiInfo: async () => {
    //te devuelve el obj con atributos
    const apiUrl = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
    );
    //console.log(apiUrl);
    // este tiene un array con los url de los pokemones
    let pokemonesUrl = apiUrl.data.results.map((el) => el.url);
    //console.log(pokemonesUrl);
    let pokemonsAPI = [];

    
    await Promise.all(pokemonesUrl).then((response) =>
      //obj de un pokemon
      response.map(async(el) => {
        //console.log(el);//"https://pokeapi.co/api/v2/pokemon/1/"
        let dataPokeAPI= await axios.get(el)
        let pokemon = dataPokeAPI.data;
        let pokemonAPI = {
          id: pokemon.id,
          name: pokemon.name,
          //  {todos atributos}.stats[0].base_stat = 45
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          speed: pokemon.stats[5].base_stat,
          height: pokemon.height,
          weight: pokemon.weight,
          //array de tipos
          types: pokemon.types
            ? pokemon.types.map((el) => el.type.name)
            : "Unknown Type",
          img: pokemon.sprites.front_default,
        };
        //console.log(pokemonAPI);
        pokemonsAPI.push(pokemonAPI);
        console.log(pokemonsAPI);
      })
    );
    console.log(pokemonsAPI);
    return pokemonsAPI;
  },
  //return apiInfo
};
