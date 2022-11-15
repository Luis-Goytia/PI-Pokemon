const axios = require("axios");
const { Type } = require("../../db.js");

module.exports = {
  getAllTypes: async () => {
    try {
      let typesDB = await Type.findAll();
      if (typesDB.length===0) {
        let dataFromAPI = await axios.get(`https://pokeapi.co/api/v2/type`);
        let typesAPI = dataFromAPI.data.results.map((type) => {
          return {
            name: type.name,
          };
        });
        Type.bulkCreate(typesAPI);
        return await Type.findAll();
      } else {
        return typesDB;
      }
    } catch (error) {
      console.log(`Error ${error} in getAllType `);
      throw `Error ${error} in getAllType `;
    }
  },
};
