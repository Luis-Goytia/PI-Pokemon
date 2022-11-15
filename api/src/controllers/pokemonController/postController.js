const { Op } = require("sequelize");
const { Pokemon, Type } = require("../../db.js");

module.exports = {
  postPokemon: async (
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    types,
    img
  ) => {
    
    try {
      let newPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
      });
      const typesDB = await Type.findAll({
        where: { name: types },
      });
      await newPokemon.addType(typesDB);
      return newPokemon;
    } catch (error) {
      console.log(`Error ${error} in postPokemon `);
      throw `Error ${error} in postPokemon `;
    }
  },
};
